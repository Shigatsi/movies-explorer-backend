const router = require("express").Router();

const loginRouter = require("./login");
const registerRouter = require("./register");
const userRoutes = require("./user");
const movieRoutes = require("./movie");
const errorRouter = require("./default");
const auth = require("../middlwares/auth");

// const routes = router.use(
//   userRoutes,
//   movieRoutes,
//   errorRouter,
// );

router.use(loginRouter);
router.use(registerRouter);

router.use(auth);

router.use("/users", userRoutes);
router.use("/movies", movieRoutes);

router.use(errorRouter);

module.exports = router;
