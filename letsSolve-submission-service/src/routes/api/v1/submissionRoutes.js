const {
  createSubmission,
  getUserProblemSubmissions,
} = require("../../../controllers/submissionController");

async function submissionRoutes(fastify, options) {
  fastify.post("/", createSubmission);
  fastify.get(
    "/user/:userId/problem/:problemId",
    getUserProblemSubmissions
  );
}

module.exports = submissionRoutes;
