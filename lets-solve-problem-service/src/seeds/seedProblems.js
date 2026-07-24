const mongoose = require("mongoose");
const { ATLAS_DB_URL } = require("../config/server.config");
const Problem = require("../models/problem.model");
const problems = require("./problems.data");

async function seedProblems() {
  if (!ATLAS_DB_URL) {
    console.error("ATLAS_DB_URL is not set. Add it to your .env file.");
    process.exit(1);
  }

  try {
    await mongoose.connect(ATLAS_DB_URL);
    console.log("Connected to database");

    let upserted = 0;
    for (const problem of problems) {
      await Problem.findOneAndUpdate(
        { title: problem.title },
        {
          $set: {
            title: problem.title,
            description: problem.description,
            difficulty: problem.difficulty,
            testCases: problem.testCases,
            codeStubs: problem.codeStubs,
            editorial: problem.editorial || "",
          },
        },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
      upserted += 1;
      console.log(`Upserted: ${problem.title}`);
    }

    console.log(`Done. Upserted ${upserted} problems.`);
  } catch (error) {
    console.error("Seed failed:", error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from database");
  }
}

seedProblems();
