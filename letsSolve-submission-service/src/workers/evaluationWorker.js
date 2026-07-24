const { Worker } = require("bullmq");
const axios = require("axios");
const redisConnection = require("../config/redisConfig");
const SubmissionRepository = require("../repository/submissionRepository");

const submissionRepository = new SubmissionRepository();

function mapEvaluationStatus(evalStatus) {
  switch ((evalStatus || "").toUpperCase()) {
    case "COMPLETED":
    case "SUCCESS":
      return "Accepted";
    case "WA":
    case "WRONG_ANSWER":
      return "WA";
    case "TLE":
    case "TIME_LIMIT_EXCEEDED":
      return "TLE";
    case "MLE":
      return "MLE";
    case "ERROR":
    case "RE":
    case "RUNTIME_ERROR":
      return "RE";
    default:
      return "Pending";
  }
}

function evaluationWorker(queueName) {
  new Worker(
    queueName,
    async (job) => {
      if (job.name === "EvaluationJob") {
        try {
          const { response, userId, submissionId } = job.data;

          if (submissionId && response?.status) {
            const status = mapEvaluationStatus(response.status);
            await submissionRepository.updateSubmissionStatus(
              submissionId,
              status,
              response.executionTime || 0
            );
            console.log(
              `Updated submission ${submissionId} status to ${status}`
            );
          }

          await axios.post("http://localhost:3003/sendPayload", {
            userId,
            payload: job.data,
          });
        } catch (error) {
          console.log(error);
        }
      }
    },
    {
      connection: redisConnection,
    }
  );
}

module.exports = evaluationWorker;
