import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { errorTodo, fetchTodo, loadTodo } from "../store/todos/todos-actions";
import TodosWrap from "../components/Todos/TodosWrap";
import { ITodo } from "../types/todo";

const Todos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodo);
    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((data: ITodo[]) => dispatch(fetchTodo(data)))
      .catch((err) => dispatch(errorTodo(err.message)));
  }, []);

  return <TodosWrap />;
};

export default Todos;
