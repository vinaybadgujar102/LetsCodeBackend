const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notimplemented.error");

const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");

const problemService = new ProblemService(new ProblemRepository());
function pingProblemController(req, res) {
  return res.status(StatusCodes.OK).json({
    message: "Ping Successful",
  });
}

async function addProblem(req, res, next) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Problem added successfully",
      error: {},
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res, next) {
  try {
    const problem = problemService.getProblemById(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Problem fetched successfully",
      error: {},
      data: problem,
    });
  } catch (error) {
    next(error);
  }
}

async function getProblems(req, res, next) {
  try {
    const respoonse = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Problems fetched successfully",
      error: {},
      data: respoonse,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteProblem(req, res, next) {
  try {
    const deletedProblem = await problemService.deleteProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully deleted the problem",
      error: {},
      data: deletedProblem,
    });
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res, next) {
  try {
    const problem = problemService.updateProblem(req.params.id, req.body);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Problem updated successfully",
      error: {},
      data: problem,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
};
