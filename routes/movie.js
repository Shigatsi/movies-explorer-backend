const router = require('express').Router();

const { getUsersMovies, createMovie, deleteMovieById } = require('../controllers/movie');

router.get('/movies', getUsersMovies);
router.post('/movies', createMovie);
router.delete('/movies/:movieId', deleteMovieById);

module.exports = router;
