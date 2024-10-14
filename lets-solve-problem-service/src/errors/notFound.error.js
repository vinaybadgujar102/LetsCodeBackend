const { StatusCodes } = require("http-status-codes");

class NotFound extends Error {
  constructor(propertyName) {
    super(
      "NotFoundError",
      StatusCodes.NOT_FOUND,
      `Resource ${propertyName} not found`,
      {}
    );
  }
}

module.exports = NotFound;
