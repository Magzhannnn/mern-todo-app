import React from "react";
import styles from "../Todos.module.css";
import { ITodo } from "../../../types/todo";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../../store/todos/todos-actions";

interface TodoItemLeftProps {
  todo: ITodo;
  isLogic: boolean;
}

const TodoItemLeft: React.FC<TodoItemLeftProps> = ({ todo, isLogic }) => {
  const dispatch = useDispatch();
  const classesCheckbox = todo.complete
    ? `${styles["todo-item_checkbox"]} ${styles["activate_checkbox"]}`
    : styles["todo-item_checkbox"];

  const classesText = todo.complete
    ? `${styles["todo-item_text"]} ${styles["activate_text"]}`
    : styles["todo-item_text"];

  const updateTodoHandler = (id: string) => {
    fetch(`http://localhost:5000/todos/${todo._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...todo, complete: !todo.complete }),
    })
      .then((res) => res.json())
      .then((data) =>
        dispatch(updateTodo({ ...data, complete: !todo.complete }))
      )
      .catch((error) => console.error(error));
  };

  return (
    <div
      className={styles["todo-item_left"]}
      onClick={() => isLogic && updateTodoHandler(todo._id)}
    >
      <div className={classesCheckbox}></div>
      <div className={classesText}>{todo.text}</div>
    </div>
  );
};

export default TodoItemLeft;
