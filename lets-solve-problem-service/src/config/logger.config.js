const winston = require("winston");
const { LOG_DB_URL } = require("./server.config");
require("winston-mongodb");
const allowedTransports = [];

allowedTransports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      winston.format.printf((log) => {
        return `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`;
      })
    ),
  })
);

allowedTransports.push(
  new winston.transports.MongoDB({
    level: "error",
    db: LOG_DB_URL,
    collection: "logs",
  })
);

allowedTransports.push(
  new winston.transports.File({
    filename: "app.log",
  })
);

const logger = winston.createLogger({
  // how the log should be displayed
  format: winston.format.combine(
    // first argument to the combine method is defining how we want the timestamp to come up
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),

    // second argument to the combine method is defining what is exactly going to be printed in logs
    winston.format.printf((log) => {
      return `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`;
    })
  ),
  transports: allowedTransports,
});

module.exports = logger;
