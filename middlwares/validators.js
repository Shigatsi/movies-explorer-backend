const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const validateLogin = celebrate({
  body: Joi.object().keys(({
    email: Joi.string().required().email().messages({
      'any.required': 'Обязательное поле',
      'any.email': 'Обязательное поле',
    }),
    password: Joi.string().min(8).required().messages({
      'any.required': 'Обязательное поле',
      'string.min': 'Минимальная длина 8 символов',
    }),
  })),
});

const validateUser = celebrate({
  body: Joi.object().keys(({
    name: Joi.string().min(2).max(30).messages({
      'string.max': 'Максимальная длина 30 символов',
      'string.min': 'Минимальная длина 2 символа',
    }),
    email: Joi.string().required().email().messages({
      'any.required': 'Обязательное поле',
      'any.email': 'Обязательное поле',
    }),
    password: Joi.string().required().messages({
      'any.required': 'Обязательное поле',
      'string.min': 'Минимальная длина 8 символов',
    }),
  })),
});

const validateMovie = celebrate({
  body: Joi.object().keys(({

  }))
})

module.exports = {
  validateLogin,
  validateUser
}
