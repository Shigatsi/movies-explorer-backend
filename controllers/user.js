const bcrypt = require('bcryptjs'); // импортируем bcrypt
const jwt = require('jsonwebtoken'); // импортируем модуль jsonwebtoken
const User = require('../models/user');

const { JWT_SECRET } = process.env;
const {
  NotFoundErr, ConflictErr, BadRequestErr, InternalServerErr,
} = require('../errors/index');

const createUser = (req, res, next) => {
  const { email, password, name } = req.body;
  User.findOne({ email })
    .then((user)=> {
      if(user) {
        throw new ConflictErr('Email уже используется');
      }
      return bcrypt.hash(password, 10);
    })
    .then((hash) => User.create({
      email,
      name,
      password: hash,
    }))
    .then(()=> res.send({
      email, name
    }))
    .catch(next);
};

const login  = (req, res, next) => {
  const { email, password } = req.body;

  return User.findByCredentials(email, password)
    .then((user)=> {
      const token = jwt.sign({ _id: user.id }, JWT_SECRET, { expiresIn: '1h' });
      return res.send({ token });
    })
    .catch(next);
};

const getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (user) {
        return res.send({ data: user });
      }
      throw new NotFoundErr('Пользователь не найден');
    })
    .catch(next);
};

const updateUserProfile = (req, res, next) => {
  const { name, email } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, email }, { new: true, runValidators: true })
    .then((user) => {
      if (name && email) {
        return res.send({ data: user });
      }
      throw new BadRequestErr('Переданы некорректные данные');
    })
    .catch(next);
};

module.exports = {
  createUser,
  login,
  getCurrentUser,
  updateUserProfile
}
