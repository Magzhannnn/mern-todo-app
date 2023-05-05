import React from "react";
import styles from "./Todos.module.css";
import { ITodo } from "../../types/todo";
import TodoItem from "./TodoItem/TodoItem";
import MyTitle from "../../UI/MyTitle/MyTitle";

interface TodoListProps {
  todos: ITodo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  if (!todos.length) return <MyTitle title="Empty..." />;

  return (
    <div className={styles["todo-list"]}>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo._id} />
      ))}
    </div>
  );
};

export default TodoList;
