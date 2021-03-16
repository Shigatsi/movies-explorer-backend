const router = require('express').Router();

const { getUsersMovies, createMovie, deleteMovieById } = require('../controllers/movies');

const authMiddlware = require('../middlwares/auth')

router.get('/movies',authMiddlware, getUsersMovies);
router.post('/movies', authMiddlware, createMovie);
router.delete('/movies/:movieId', authMiddlware, deleteMovieById);

module.exports = router;
