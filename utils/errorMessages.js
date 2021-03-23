const errorMessages = {
  // BadRequestErr
  400: {
    required: 'Обязательное поле',
    email: 'Невалидный email',
    URL: 'Некорректный URL',
    max: 'Максимальная длина 30 символов',
    minTwo: 'Минимальная длина 2 символа',
    minEight: 'Минимальная длина 8 символов',
    validateErr: 'Переданы некорректные данные',

  },
  // UnauthorizedErr
  401: {
    auth: 'Необходима авторизация',
  },
  // ForbidenErr
  403: {
    film: 'Удалить карточку фильма может только её владелец',
  },
  // NotFoundErr
  404: {
    film: 'Фильм с таким id не найден',
    user: 'Пользователь с таким id не найден',
    resource: 'Запрашиваемый ресурс не найден',
  },
  // ConflictErr
  409: {
    email: 'Email уже используется',
  },
  // InternalServerErr
  500: {
    server: 'На сервере произошла ошибка',
  },
};

module.exports = errorMessages;
