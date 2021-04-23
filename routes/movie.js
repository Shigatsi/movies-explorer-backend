const router = require("express").Router();

const {
  getUsersMovies,
  createMovie,
  deleteMovieById,
} = require("../controllers/movies");
const {
  validateMovie,
  validateDeleteMovie,
} = require("../middlwares/validators");

const authMiddlware = require("../middlwares/auth");

router.get("/", authMiddlware, getUsersMovies); //'/movies'
router.post("/", authMiddlware, validateMovie, createMovie); //'/movies'
router.delete("/:movieId", authMiddlware, validateDeleteMovie, deleteMovieById);

module.exports = router;
