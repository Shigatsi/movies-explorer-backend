const router = require('express').Router();

const { getUsersMovies, createMovie, deleteMovieById } = require('../controllers/movies');
const { validateMovie, validateDeleteMovie } = require('../middlwares/validators');

const authMiddlware = require('../middlwares/auth');

router.get('/movies', authMiddlware, getUsersMovies);
router.post('/movies', authMiddlware, validateMovie, createMovie);
router.delete('/movies/:movieId', authMiddlware, validateDeleteMovie, deleteMovieById);

module.exports = router;
