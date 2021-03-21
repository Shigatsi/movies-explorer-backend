const { CelebrateError } = require('celebrate');
const errorMessages = require('../utils/errorMessages');

const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err instanceof CelebrateError) {
    return res.status(400).send(err.details.get('body'));
  }
  if (err.statusCode) {
    return res.status(err.statusCode).send({ message: err.message });
  }
  if (['CastError', 'ValidationError'].includes(err.name)) {
    return res.status(400).send({ message: errorMessages[400].validateErr });
  }

  return res.status(500).send({ message: err.message });
};

module.exports = errorHandler;
