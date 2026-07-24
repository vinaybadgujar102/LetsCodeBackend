import CodeExecutorStrategy, {
  ExecutionResponse,
} from "../types/codeExecutorStrategy";
import { CPP_IMAGE } from "../utils/constants";
import createContainer from "./containerFactory";
import { decodeDockerStream } from "./dockerHelper";

class CppExecutor implements CodeExecutorStrategy {
  async execute(
    code: string,
    inputTestCase: string,
    outputTestCase: string
  ): Promise<ExecutionResponse> {
    console.log("Initialising a new Cpp container");
    console.log(code, inputTestCase, outputTestCase);

    const rawLogBuffer: Buffer[] = [];

    const runCommand = `echo '${code.replace(
      /'/g,
      `'\\"`
    )}' > main.cpp && g++ main.cpp -o main && echo '${inputTestCase.replace(
      /'/g,
      `'\\"`
    )}' | ./main`;

    const cppDockerContainer = await createContainer(CPP_IMAGE, [
      "/bin/bash",
      "-c",
      runCommand,
    ]);

    await cppDockerContainer.start();
    console.log("Container started");

    const loggerStream = await cppDockerContainer.logs({
      stdout: true,
      stderr: true,
      timestamps: false,
      follow: true,
    });

    loggerStream.on("data", (chunk) => {
      rawLogBuffer.push(chunk);
    });

    try {
      const codeResponse: string = await this.fetchDecodedStream(
        loggerStream,
        rawLogBuffer
      );

      if (codeResponse.trim() === outputTestCase.trim()) {
        return {
          output: codeResponse,
          status: "COMPLETED",
        };
      } else {
        return {
          output: codeResponse,
          status: "WA",
        };
      }
    } catch (error) {
      if (error === "TLE") {
        await cppDockerContainer.kill();
      }
      return {
        output: error as string,
        status: "ERROR",
      };
    } finally {
      await cppDockerContainer.remove({ force: true });
    }
  }

  fetchDecodedStream(
    loggerStream: NodeJS.ReadableStream,
    rawLogBuffer: Buffer[]
  ): Promise<string> {
    return new Promise((res, rej) => {
      const timeout = setTimeout(() => {
        console.log("Timed out");
        rej("TLE");
      }, 2000);

      loggerStream.on("end", () => {
        clearTimeout(timeout);
        const completeBuffer = Buffer.concat(rawLogBuffer);
        const decodedStream = decodeDockerStream(completeBuffer);
        if (decodedStream.stderr) {
          rej(decodedStream.stderr);
        } else {
          res(decodedStream.stdout);
        }
      });
    });
  }
}

export default CppExecutor;
