const router = require('express').Router();
const { NotFoundErr } = require('../errors/index');
const errorMessages = require('../utils/errorMessages');

// eslint-disable-next-line
router.all('/*', (req, res) => {
  throw new NotFoundErr(errorMessages[404].resource);
});

module.exports = router;
