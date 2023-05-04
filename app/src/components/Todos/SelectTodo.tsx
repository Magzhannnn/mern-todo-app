import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ITodo } from "../../types/todo";
import styles from "./Todos.module.css";
import Loading from "../../UI/Loading/Loading";
import Error from "../../UI/Error/Error";
import TodoItem from "./TodoItem";
import Container from "../../UI/Container/Container";
import left from "../../image/leftArrow.png";
import { TODO_ROUTE } from "../../utils/const";

const SelectTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [load, setLoad] = useState(false);
  const [error, setError] = useState({ content: "", isVisible: false });
  const [todo, setTodo] = useState<ITodo>({
    _id: "",
    text: "",
    complete: false,
    date: "",
  });

  useEffect(() => {
    setLoad(true);

    fetch(`http://localhost:5000/todos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setError({ content: "", isVisible: false });
        setTodo(data);
      })
      .catch((err) => setError({ content: err.message, isVisible: true }));

    setLoad(false);
  }, []);

  if (load) return <Loading title={"Select_Todo"} />;

  if (error.isVisible) return <Error title={error.content} />;

  return (
    <div className={styles.select_todo}>
      <div
        className={styles["todo-select_back"]}
        onClick={() => navigate(TODO_ROUTE)}
      >
        <img src={left} alt="left" />
      </div>
      <TodoItem todo={todo} isLogic={false} />
    </div>
  );
};

export default SelectTodo;