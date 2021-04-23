const router = require("express").Router();

const { validateUser } = require("../middlwares/validators");
const { createUser } = require("../controllers/users");

router.post("/signup", validateUser, createUser);

module.exports = router;
