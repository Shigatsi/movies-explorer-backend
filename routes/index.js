const router = require('express').Router();
const userRoutes = require('./user');
const movieRoutes = require('./movie');
const errorRouter = require('./error');


const routes = router.use(
  userRoutes,
  movieRoutes,
  errorRouter
);

module.exports = routes;
