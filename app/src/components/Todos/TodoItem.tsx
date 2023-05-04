import React from "react";
import styles from "./Todos.module.css";
import { ITodo } from "../../types/todo";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../../store/todos/todos-actions";
import PenIcon from "../../UI/PenIcon/PenIcon";
import { useNavigate } from "react-router-dom";
import { TODO_ROUTE } from "../../utils/const";

import vision24 from "../../image/vision24.png";
import vision48 from "../../image/vision48.png";

interface TodoItemProps {
  todo: ITodo;
  isLogic?: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, isLogic = true }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const classesCheckbox = todo.complete
    ? `${styles["todo-item_checkbox"]} ${styles["activate_checkbox"]}`
    : styles["todo-item_checkbox"];

  const classesText = todo.complete
    ? `${styles["todo-item_text"]} ${styles["activate_text"]}`
    : styles["todo-item_text"];

  const removeTodoHandler = (id: string) => {
    fetch(`http://localhost:5000/todos/${todo._id}`, {
      method: "DELETE",
    }).catch((error) => console.error(error));
    // .then((res) => res.json())
    // .then((data) => console.log(data))

    dispatch(removeTodo(id));
    navigate(TODO_ROUTE);
    console.log("Start Remove");
  };

  const updateTodoHandler = (id: string) => {
    fetch(`http://localhost:5000/todos/${todo._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...todo, complete: !todo.complete }),
    }).catch((error) => console.error(error));
    // .then((res) => res.json())
    // .then((data) => console.log(data))

    dispatch(updateTodo(id));
  };

  return (
    <div className={styles["todo-item"]}>
      <div
        className={styles["todo-item_left"]}
        onClick={() => isLogic && updateTodoHandler(todo._id)}
      >
        <div className={classesCheckbox}></div>
        <div className={classesText}>{todo.text}</div>
      </div>

      <div className={styles["todo-item_date"]}>{todo.createdAt}</div>
      <div className={styles["todo-item_right"]}>
        {isLogic ? (
          <div
            className={styles["todo-item_center"]}
            onClick={() => isLogic && navigate(`${TODO_ROUTE}/${todo._id}`)}
          >
            <img
              src={vision48}
              alt="vision48"
              className={styles["todo-item_vision"]}
            />
          </div>
        ) : (
          <>
            <PenIcon />
            <div
              className={styles["todo-item_remove"]}
              onClick={() => removeTodoHandler(todo._id)}
            >
              x
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
