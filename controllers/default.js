const { NotFoundErr } = require('../errors/index');
const errorMessages = require('../utils/errorMessages');

const unknowPath = (res, req) => {
  throw new NotFoundErr(errorMessages[404].resource);
};

module.exports = unknowPath;
