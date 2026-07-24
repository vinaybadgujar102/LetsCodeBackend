async function pingRequest(req, res) {
  console.log(this);

  const response = await this.testService.pingCheck();
  return res.send(response);
}

async function createSubmission(req, res) {
  console.log(req.body);

  const response = await this.submissionService.createSubmission(req.body);
  console.log(response);

  return res.status(201).send({
    error: {},
    data: response,
    success: true,
    message: "Created submission successfully",
  });
}

async function getUserProblemSubmissions(req, res) {
  const { userId, problemId } = req.params;

  const submissions =
    await this.submissionService.getSubmissionsByUserAndProblem(
      userId,
      problemId
    );

  return res.status(200).send({
    error: {},
    data: submissions,
    success: true,
    message: "Fetched submissions successfully",
  });
}

module.exports = {
  pingRequest,
  createSubmission,
  getUserProblemSubmissions,
};
