const winston = require("winston");
const format = require("winston");
const expressWinston = require("express-winston");
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

// логгер запросов
const requestLogger = expressWinston.logger({
  transports: [new winston.transports.File({ filename: "request.log" })],
  // format: winston.format.json(),
  format: combine(label(), timestamp(), myFormat),
});

// логгер ошибок
const errorLogger = expressWinston.errorLogger({
  transports: [new winston.transports.File({ filename: "error.log" })],
  // format: winston.format.json(),
  format: combine(label({ label: "does it work?" }), timestamp(), myFormat),
});

module.exports = {
  requestLogger,
  errorLogger,
};
