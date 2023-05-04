const mongoose = require("mongoose");
const moment = require("moment-timezone");

const Schema = mongoose.Schema;

const timestamp = moment().unix(); // получаем текущую временную метку
const formattedTime = moment
  .unix(timestamp)
  .tz("Asia/Qostanay")
  .format("YYYY-MM-DD HH:mm:ss"); // преобразуем в часовой пояс и форматируем

const todoSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  date: {
    type: String,
    default: formattedTime,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
