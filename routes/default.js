const router = require('express').Router();
const authMiddlware = require('../middlwares/auth');

router.all('/*', authMiddlware);

module.exports = router;
