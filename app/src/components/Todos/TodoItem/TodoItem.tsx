import React from "react";
import styles from "../Todos.module.css";
import { ITodo } from "../../../types/todo";
import TodoItemLeft from "./TodoItemLeft";
import TodoItemRight from "./TodoItemRight";

interface TodoItemProps {
  todo: ITodo;
  isLogic?: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, isLogic = true }) => {
  return (
    <div className={styles["todo-item"]}>
      <TodoItemLeft todo={todo} isLogic={isLogic} />
      <div className={styles["todo-item_date"]}>{todo.createdAt}</div>
      <TodoItemRight id={todo._id} complete={todo.complete} isLogic={isLogic} />
    </div>
  );
};

export default TodoItem;
