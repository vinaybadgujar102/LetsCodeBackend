const Submission = require("../models/submissionModel");

class SubmissionRepository {
  constructor() {
    this.submissionModel = Submission;
  }

  async createSubmission(submission) {
    const response = await this.submissionModel.create(submission);
    console.log(response);

    return response;
  }

  async getSubmissionsByUserAndProblem(userId, problemId) {
    return this.submissionModel
      .find({ userID: userId, problemID: problemId })
      .sort({ createdAt: -1 });
  }

  async updateSubmissionStatus(submissionId, status, executionTime = 0) {
    return this.submissionModel.findByIdAndUpdate(
      submissionId,
      { status, executionTime },
      { new: true }
    );
  }
}

module.exports = SubmissionRepository;
