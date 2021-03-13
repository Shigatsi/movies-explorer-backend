const mongoose = require ('mongoose');
const bcrypt = require('bcryptjs'); // импортируем bcrypt
const validator = require('validator');
const { UnauthorizedErr } = require('../errors/index');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => validator.isEmail(email),
    },
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  }
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      console.log(user);
      if (!user) {
        throw new UnauthorizedErr('Неправильные почта или пароль');
      }
      // сравниваем пароли
      return bcrypt.compare(password, user.password)// в следующий .then приходит false или true
        .then((matched) => {
          if (!matched) {
            throw new UnauthorizedErr('Неправильные почта или пароль');
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
