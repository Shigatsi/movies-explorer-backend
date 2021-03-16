const jwt = require('jsonwebtoken');
// импортируем модуль jsonwebtoken
const { NODE_ENV, JWT_SECRET } = process.env;
const { UnauthorizedErr } = require('../errors/index');
const errorMessages = require('../utils/errorMessages');

const auth = (req, res, next) => {
  // достаём авторизационный заголовок
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedErr(errorMessages[401]['auth']);
  }
  // извлечём токен
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    // верифицируем токен
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    throw new UnauthorizedErr(errorMessages[401]['auth']);
  }
  req.user = payload; // записываем пейлоуд в объект запроса
  next();
};

module.exports = auth;
