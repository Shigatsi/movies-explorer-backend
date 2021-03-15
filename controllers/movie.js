const Movie = require('../models/movie');
const { NotFoundErr, ForbidenErr } = require('../errors/index');

const getUsersMovies = (req, res) => {
  Movie.find({ owner: req.user._id })
    .then((movies)=>  res.send({ data: movies }))
    .catch(() => res.status(500).send({ message: 'На сервере произошла ошибка' }));
}

const createMovie = (req, res) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail
  } = req.body;
  Card.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    owner: req.user._id
  })
    .then((movie) => res.send({ data: movie }))
    .catch(next);
};

const deleteMovieById = (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundErr(`Фильм с id${req.params.id} не найдена`);
      }
      if (card.owner.toString() !== req.user._id) {
        throw new ForbidenErr('Удалить фильм может только автор карточки');
      }
      return res.send({ data: movie });
    })
    .catch(next);
};
