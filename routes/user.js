const router = require('express').Router();

const authMiddleware = require('../middlwares/auth');
const { validateLogin, validateUser, validateUpdateUser } = require('../middlwares/validators');
const {
  createUser, login, getCurrentUser, updateUserProfile,
} = require('../controllers/users');

router.post('/signin', validateLogin, login);
router.post('/signup', validateUser, createUser);
router.get('/users/:id', authMiddleware, getCurrentUser); // возвращает информацию о пользователе (email и имя)
router.patch('/users/me', authMiddleware, validateUpdateUser, updateUserProfile); // обновляет информацию о пользователе (email и имя)

module.exports = router;
