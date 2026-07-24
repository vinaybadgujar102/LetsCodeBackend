const mongoose = require("mongoose");
const { Schema } = mongoose;

const problemSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: [true, "Difficulty is required"],
    default: "easy",
  },
  testCases: [
    {
      input: {
        type: String,
        required: [true, "Test Case input is required"],
      },
      output: {
        type: String,
        required: [true, "Test Case output is required"],
      },
    },
  ],
  codeStubs: [
    {
      language: {
        type: String,
        enum: ["CPP", "JAVA", "PYTHON"],
        required: [true, "Stub language is required"],
      },
      startSnippet: {
        type: String,
        required: [true, "Start snippet is required"],
      },
      userSnippet: {
        type: String,
        required: [true, "User snippet is required"],
      },
      endSnippet: {
        type: String,
        required: [true, "End snippet is required"],
      },
    },
  ],
  editorial: {
    type: String,
  },
});

const Problem = mongoose.model("Problem", problemSchema);

module.exports = Problem;
