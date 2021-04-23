const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const app = express();
const { PORT = 3000, MONGO_URL, NODE_ENV } = process.env;

const routes = require("./routes");
const limiter = require("./middlwares/limiter");
const errorHandler = require("./middlwares/errorHandler");
const { requestLogger, errorLogger } = require("./middlwares/logger");
const { allowedCors, mongoDev } = require("./utils/const");

app.use(cors());
app.use((req, res, next) => {
  const { origin } = req.headers; // Записываем в переменную origin соответствующий заголовок

  if (allowedCors.includes(origin)) {
    // Проверяем, что значение origin есть среди разрешённых доменов
    res.header("Access-Control-Allow-Origin", origin);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET,HEAD,PUT,PATCH,POST,DELETE"
    );
  }
  next();
});

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(NODE_ENV === "production" ? MONGO_URL : mongoDev, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(requestLogger);
app.use(limiter);
app.use("/", routes);
app.use(errorLogger);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`app run ${PORT}`);
});
