const router = require('express').Router();
const userRoutes = require('./user');

const routes = router.use(
  userRoutes
);

module.exports = routes;
