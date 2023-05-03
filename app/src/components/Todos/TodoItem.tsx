import React from "react";
import styles from "./Todos.module.css";
import { ITodo } from "../../types/todo";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../../store/todos/todos-actions";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const classesCheckbox = todo.complete
    ? `${styles["todo-item_checkbox"]} ${styles["activate_checkbox"]}`
    : styles["todo-item_checkbox"];

  const classesText = todo.complete
    ? `${styles["todo-item_text"]} ${styles["activate_text"]}`
    : styles["todo-item_text"];

  const removeTodoHandler = (id: string) => {
    fetch(`http://localhost:5000/todos/${todo._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    dispatch(removeTodo(id));
  };

  const updateTodoHandler = (id: string) => {
    fetch(`http://localhost:5000/todos/${todo._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...todo, complete: !todo.complete }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    dispatch(updateTodo(id));
  };

  return (
    <div className={styles["todo-item"]}>
      <div
        className={styles["todo-item_left"]}
        onClick={() => updateTodoHandler(todo._id)}
      >
        <div className={classesCheckbox}></div>
        <div className={classesText}>{todo.text}</div>
      </div>
      <div
        className={styles["todo-item_remove"]}
        onClick={() => removeTodoHandler(todo._id)}
      >
        x
      </div>
    </div>
  );
};

export default TodoItem;
