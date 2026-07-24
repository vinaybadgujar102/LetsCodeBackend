const mongoose = require("mongoose");
const { ATLAS_DB_URL } = require("./serverConfig");

async function connectDB() {
  if (!ATLAS_DB_URL) {
    console.error("ATLAS_DB_URL is not set. Add it to your .env file.");
    process.exit(1);
  }

  try {
    await mongoose.connect(ATLAS_DB_URL);
    console.log("Connected to database");
  } catch (error) {
    console.error("Unable to connect to database");
    console.error(error.message || error);
    process.exit(1);
  }
}

module.exports = { connectDB };
