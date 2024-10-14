const problemController = require("../src/controllers/problem.controller");
const problemService = require("../src/services/problem.service");
const { StatusCodes } = require("http-status-codes");
const { expect, describe, test, beforeEach } = require("@jest/globals");
const NotFound = require("../src/errors/notFound.error");

jest.mock("../src/services/problem.service");

describe("tests", () => {
  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  test("should get all problems", async () => {
    const problems = [];
    problemService.prototype.getAllProblems.mockResolvedValue(problems);

    await problemController.getProblems(req, res, next);

    expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(problemService.prototype.getAllProblems).toHaveBeenCalledTimes(1);
    expect(next).not.toHaveBeenCalled();
  });

  test("should call next with error when getting problem by id", async () => {
    const problemId = 123;
    const mockError = new Error("Error message");

    problemService.prototype.getProblemById.mockRejectedValue(mockError);

    await problemController.getProblem(
      req,
      { params: { id: problemId } },
      res,
      next
    );

    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(mockError);
  });
});
