import React, { useEffect } from "react";
import styles from "./Todos.module.css";
import { useSelector } from "react-redux";
import {
  selectAllTodosInfo,
  selectLoadTodo,
} from "../../store/todos/todo-selectors";
import Loading from "../../UI/Loading/Loading";
import Error from "../../UI/Error/Error";
import TodoList from "./TodoList";
import Container from "../../UI/Container/Container";
import AddTodo from "./AddTodo";
const TodosWrap = () => {
  const { loading, error, todos } = useSelector(selectAllTodosInfo);

  // useEffect(() => {
  //   console.log(todos)
  // }, [todos])

  if (loading) return <Loading title="Todo" />;

  if (error) return <Error title={error} />;

  return (
    <Container>
      <TodoList todos={todos} />
      <AddTodo />
    </Container>
  );
};

export default TodosWrap;
