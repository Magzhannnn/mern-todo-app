const express = require("express");
const {
  getTodos,
  getTodo,
  deleteTodo,
  addTodo,
  updateTodo,
} = require("../controllers/todo-controller");

const router = express.Router();

router.get("/todos", getTodos);
router.get("/todos/:id", getTodo);
router.delete("/todos/:id", deleteTodo);
router.post("/todos", addTodo);
router.put("/todos/:id", updateTodo);

module.exports = router
