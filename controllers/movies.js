const Movie = require('../models/movie');
const { NotFoundErr, ForbidenErr } = require('../errors/index');
const errorMessages = require('../utils/errorMessages');

const getUsersMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.send({ data: movies }))
    .catch(next);
};

const createMovie = (req, res, next) => {
  console.log('req.user', req.user);
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    movieId,
    nameRU,
    nameEN,
    thumbnail,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    movieId,
    nameRU,
    nameEN,
    thumbnail,
    owner: req.user._id,
  })
    .then((movie) => res.send({ data: movie }))
    .catch(next);
};

const deleteMovieById = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundErr(errorMessages[404].film);
      }
      if (movie.owner.toString() !== req.user._id) {
        throw new ForbidenErr(errorMessages[403].film);
      }
      Movie.deleteOne(movie)
        .then(() => res.send({ data: movie }));
    })
    .catch(next);
};

module.exports = {
  getUsersMovies,
  createMovie,
  deleteMovieById,
};
