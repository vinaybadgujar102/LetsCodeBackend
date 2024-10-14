const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class BadRequest extends BaseError {
  constructor(propertyName, details) {
    super(
      "BadRequest",
      StatusCodes.BAD_REQUEST,
      `Invalid struture for ${propertyName} provided`,
      details
    );
  }
}

module.exports = BadRequest;
