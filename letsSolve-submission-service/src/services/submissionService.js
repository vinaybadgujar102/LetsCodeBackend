const { fetchProblemDetails } = require("../apis/problemAdminApi");
const SubmissionProducer = require("../producers/submissionQueueProducer");

const LANGUAGE_MAP = {
  python: "PYTHON",
  java: "JAVA",
  c_cpp: "CPP",
  cpp: "CPP",
  PYTHON: "PYTHON",
  JAVA: "JAVA",
  CPP: "CPP",
};

function normalizeLanguage(language) {
  if (!language) return language;
  const mapped = LANGUAGE_MAP[language] || LANGUAGE_MAP[language.toLowerCase()];
  return mapped || language.toUpperCase();
}

class SubmissionService {
  constructor(submissionRepository) {
    this.submissionRepository = submissionRepository;
  }

  async pingCheck() {
    return "pong";
  }

  async createSubmission(submissionPayload) {
    // hit the problem admin service and fetch the problems details
    const problemId =
      submissionPayload.problemId || submissionPayload.problemID;
    const userId = submissionPayload.userId || submissionPayload.userID;

    const problemAdminApiResponse = await fetchProblemDetails(problemId);

    if (!problemAdminApiResponse) {
      console.log("failed to create submission");
      return false;
    }

    const normalizedLanguage = normalizeLanguage(submissionPayload.language);
    submissionPayload.language = normalizedLanguage;
    submissionPayload.problemID = problemId;
    submissionPayload.userID = userId;

    const languageCodeStub = problemAdminApiResponse.data.codeStubs.find(
      (codeStub) =>
        normalizeLanguage(codeStub.language) === normalizedLanguage
    );

    if (!languageCodeStub) {
      throw { message: `No code stub found for language: ${normalizedLanguage}` };
    }

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

    const firstTestCase = problemAdminApiResponse.data.testCases[0];
    const response = await SubmissionProducer({
      [submission._id]: {
        code: submission.code,
        language: normalizedLanguage,
        inputCase: firstTestCase.input,
        outputCase: firstTestCase.output,
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

  async getSubmissionsByUserAndProblem(userId, problemId) {
    return this.submissionRepository.getSubmissionsByUserAndProblem(
      userId,
      problemId
    );
  }

  async updateSubmissionStatus(submissionId, status, executionTime = 0) {
    return this.submissionRepository.updateSubmissionStatus(
      submissionId,
      status,
      executionTime
    );
  }
}

module.exports = SubmissionService;
