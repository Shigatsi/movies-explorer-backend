const router = require('express').Router();
const userRoutes = require('./user');
const movieRoutes = require('./movie');

const routes = router.use(
  userRoutes,
  movieRoutes
);

module.exports = routes;
