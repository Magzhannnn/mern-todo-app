const Todo = require("../models/todo-model");

const handleError = (res, err) => {
  res.status(500).json(err);
};

const getTodos = (req, res) => {
  Todo.find()
    .sort({ title: 1 })
    .then((todos) => res.status(200).json(todos))
    .catch((err) => handleError(res, { error: err.message }));
};

const getTodo = (req, res) => {
  const id = req.params.id;

  Todo.findById(id)
    .then((todo) => res.status(200).json(todo))
    .catch((err) => handleError(res, { error: err.message }));
};

const deleteTodo = (req, res) => {
  const id = req.params.id;

  Todo.findByIdAndDelete(id)
    .then((result) => res.status(200).json(result))
    .catch((err) => handleError(res, { error: err.message }));
};

const addTodo = (req, res) => {
  const todo = new Todo(req.body);

  todo
    .save()
    .then((result) => res.status(201).json(result))
    .catch((err) => handleError(res, { error: err.message }));
};

const updateTodo = (req, res) => {
  const id = req.params.id;

  Todo.findByIdAndUpdate(id, req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => handleError(res, { error: err.message }));
};

module.exports = {
  getTodos,
  getTodo,
  deleteTodo,
  addTodo,
  updateTodo,
};
