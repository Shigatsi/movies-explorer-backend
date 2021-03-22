const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const errorMessages = require('../utils/errorMessages');

const validateEmail = (val, helpers) => {
  if (validator.isEmail(val)) {
    return val;
  }
  return helpers.error(errorMessages[400].email); // 'Невалидный email'
};

const validateLink = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error(errorMessages[400].URL); // 'Некорректный URL'
};

const validateLogin = celebrate({
  body: Joi.object().keys(({
    email: Joi.string().required().custom(validateEmail).messages({
      'any.required': errorMessages[400].required,
    }),
    password: Joi.string().min(8).required().messages({
      'any.required': errorMessages[400].required,
      'string.min': errorMessages[400].minEight,
    }),
  })),
});

const validateUpdateUser = celebrate({
  body: Joi.object().keys(({
    name: Joi.string().min(2).max(30).required().messages({
      'string.max': errorMessages[400].max,
      'string.min': errorMessages[400].minTwo,
    }),
    email: Joi.string().required().custom(validateEmail).messages({
      'any.required': 'Обязательное поле',
    }),
  })),
});

const validateUser = celebrate({
  body: Joi.object().keys(({
    name: Joi.string().min(2).max(30).required().messages({
      'string.max': errorMessages[400].max,
      'string.min': errorMessages[400].minTwo,
    }),
    email: Joi.string().required().custom(validateEmail).messages({
      'any.required': 'Обязательное поле',
    }),
    password: Joi.string().min(8).required().messages({
      'any.required': errorMessages[400].required,
      'string.min': errorMessages[400].minEight,
    }),
  })),
});

const validateMovie = celebrate({
  body: Joi.object().keys(({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().custom(validateLink),
    trailer: Joi.string().required().custom(validateLink),
    movieId: Joi.string().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().required().custom(validateLink),
  })),
});

const validateDeleteMovie = celebrate({
  params: Joi.object().keys(({
    movieId: Joi.string().required().hex().length(24),
  })),
});

module.exports = {
  validateLogin,
  validateUpdateUser,
  validateUser,
  validateMovie,
  validateDeleteMovie,
};
