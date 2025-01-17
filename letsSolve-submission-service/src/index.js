const fastify = require("fastify")({
  logger: true,
});
const app = require("./app");
const serverConfig = require("./config/serverConfig");
const { connectDB } = require("./config/dbConfig");
const evaluationWorker = require("./workers/evaluationWorker");

fastify.register(app);
fastify.listen({ port: serverConfig.PORT }, async (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  await connectDB();

  evaluationWorker("EvaluationQueue");
});
