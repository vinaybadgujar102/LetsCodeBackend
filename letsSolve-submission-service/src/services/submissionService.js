const { fetchProblemDetails } = require("../apis/problemAdminApi");
const SubmissionProducer = require("../producers/submissionQueueProducer");

class SubmissionService {
  contructor(submissionRepository) {
    this.submissionRepository = submissionRepository;
  }

  async pingCheck() {
    return "pong";
  }

  async createSubmission(submissionPayload) {
    // hit the problem admin service and fetch the problems details
    const problemId = submissionPayload.problemId;
    const userId = submissionPayload.userId;

    const problemAdminApiResponse = await fetchProblemDetails(problemId);

    if (!problemAdminApiResponse) {
      console.log("failed to create submission");
      return false;
    }

    const languageCodeStub = problemAdminApiResponse.data.codeStubs.find(
      (codeStub) =>
        codeStub.language.toLowerCase() ===
        submissionPayload.language.toLowerCase()
    );

    submissionPayload.code =
      languageCodeStub.startSnippet +
      "\n\n" +
      submissionPayload.code +
      "\n\n" +
      languageCodeStub.endSnippet;

    const submission = await this.submissionRepository.createSubmission(
      submissionPayload
    );
    if (!submission) {
      // TODO: add error handling
      throw { message: "Not able to create submission" };
    }
    console.log("submission created", submission);

    const response = await SubmissionProducer({
      [submission._id]: {
        code: submission.code,
        language: submission.language,
        inputCase: problemAdminApiResponse.data.testCases[0].inputCase,
        outputCase: problemAdminApiResponse.data.testCases[0].outputCase,
        userId: userId,
        submissionId: submission._id,
      },
    });

    // TODO: Add handling of all testcases here
    return {
      queueResponse: response,
      submission,
    };
  }
}

module.exports = SubmissionService;
