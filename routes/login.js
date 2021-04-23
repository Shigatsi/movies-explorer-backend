const router = require("express").Router();
const { validateLogin } = require("../middlwares/validators");
const { login } = require("../controllers/users");

router.post("/signin", validateLogin, login);

module.exports = router;
