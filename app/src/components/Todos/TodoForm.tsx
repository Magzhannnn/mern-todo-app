import React, { useEffect, useState } from "react";
import { TODO_POST, TODO_ROUTE } from "../../utils/const";
import styles from "./Todos.module.css";
import { useDispatch } from "react-redux";
import { ModalActionTypes } from "../../types/modal";
import { useNavigate } from "react-router-dom";
import { addTodo, updateTodo } from "../../store/todos/todos-actions";
import { ITodo } from "../../types/todo";

interface TodoFormProps {
  id?: string;
  title?: string;
  method?: string;
}

const TodoForm: React.FC<TodoFormProps> = ({
  id = "",
  title = "",
  method = TODO_POST,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [todoText, setTodoText] = useState(title);
  const isLocal = method === TODO_POST;

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const addTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("http://localhost:5000/todos", {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: todoText }),
    })
      .then((res) => res.json())
      .then((data: ITodo) => dispatch(addTodo(data)))
      .catch((err) => console.log(err.message));
    setTodoText("");

    dispatch({ type: ModalActionTypes.CLOSE_MODAL });
  };

  const updateTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(`http://localhost:5000/todos/${id}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: todoText }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(updateTodo({ ...data, text: todoText }));
        dispatch({ type: ModalActionTypes.CLOSE_MODAL });
        navigate(TODO_ROUTE);
      })
      .catch((error) => console.error(error));
  };

  return (
    <form
      onSubmit={isLocal ? addTodoHandler : updateTodoHandler}
      className={styles["form-todo"]}
    >
      <input
        type="text"
        value={todoText}
        onChange={titleHandler}
        className={styles["input-todo"]}
      />
      <button className={styles["btn-todo"]}>
        {isLocal ? "Add" : "Update"}
      </button>
    </form>
  );
};

export default TodoForm;
