const router = require('express').Router();

const { createUser, login, getCurrentUser, updateUserProfile } = require('../controllers/user')

router.post('/signin', login);
router.post('/signup', createUser);
router.get('/users/me', getCurrentUser); //возвращает информацию о пользователе (email и имя)
router.patch('/users/me', updateUserProfile); // обновляет информацию о пользователе (email и имя)

module.exports = router;
