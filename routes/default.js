const router = require('express').Router();
const authMiddlware = require('../middlwares/auth');
const unknowPath = require('../controllers/default');

router.all('/*', authMiddlware, unknowPath);

module.exports = router;
