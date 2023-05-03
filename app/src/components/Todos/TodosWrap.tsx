import React from "react";
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

const TodosWrap = () => {
  const { loading, error, todos } = useSelector(selectAllTodosInfo);

  return (
    <Container>
      {loading && <Loading title="Todo" />}
      {error && <Error title={error} />}
      <TodoList todos={todos} />
    </Container>
  );
};

export default TodosWrap;
