import CppExecutor from "../containers/cppExecutor";
import JavaExecutor from "../containers/javaExecutor";
import PythonExecutor from "../containers/pythonExecutor";
import CodeExecutorStrategy from "../types/codeExecutorStrategy";

function normalizeLanguage(codeLanguage: string): string {
  const upper = codeLanguage.toUpperCase();
  if (upper === "C_CPP" || upper === "C++") {
    return "CPP";
  }
  return upper;
}

export default function createExecutor(
  codeLanguage: string
): CodeExecutorStrategy | null {
  const language = normalizeLanguage(codeLanguage);

  if (language === "PYTHON") {
    return new PythonExecutor();
  } else if (language === "JAVA") {
    return new JavaExecutor();
  } else if (language === "CPP") {
    return new CppExecutor();
  } else {
    return null;
  }
}
