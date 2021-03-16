const errorMessages = {
  //BadRequestErr
  400: {
    required: 'Обязательное поле',
    email: 'Невалидный email',
    URL: 'Некорректный URL',
    max: 'Максимальная длина 30 символов',
    minTwo: 'Минимальная длина 2 символа',
    minEight: 'Минимальная длина 8 символов',
    updateProfile: 'Переданы некорректные данные'
  },
  //UnauthorizedErr
  401: {
    auth: 'Необходима авторизация'
  },
  //ForbidenErr
  403: {
    film: 'Удалить карточку фильма может только её владелец'
  },
  //NotFoundErr
  404: {
    film: 'Фильм с таким id не найден',
    user: 'Пользователь с таким id не найден',
    resource: 'Запрашиваемый ресурс не найден'
  },
  //ConflictErr
  409: {
    email: 'Email уже используется'
  },
  //InternalServerErr
  500: {
    server: 'На сервере произошла ошибка',
  }
}

module.exports = errorMessages;

// 400 - ValidationError, CastError, brcrypt undefined error
// 401 - Отсутствие токена (JWT), некорректный токен (JWT), невозможно авторизоваться
// 403 - Обновление чужого профиля, чужого аватара, удаление чужой карточки, в общем попытка получить то, что не принадлежит вам по праву!
// 404 - Пользователь, карточка по данному корректному ID не найдены ( поиск пользователя по id, простановка\снятие лайка, удаление карточки, изменение профиля\аватара несуществующего пользователя)
// 409 - Попытка зарегистрировать вторую учетную запись на тот же email.
