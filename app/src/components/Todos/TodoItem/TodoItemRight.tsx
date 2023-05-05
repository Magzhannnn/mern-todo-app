import React from "react";
import styles from "../Todos.module.css";
import PenIcon from "../../../UI/PenIcon/PenIcon";
import vision48 from "../../../image/vision48.png";
import { useNavigate } from "react-router-dom";
import { TODO_ROUTE } from "../../../utils/const";
import { ITodo } from "../../../types/todo";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../../store/todos/todos-actions";

interface TodoItemRightProps {
  id: string;
  isLogic: boolean;
  complete: boolean;
}

const TodoItemRight: React.FC<TodoItemRightProps> = ({
  id,
  isLogic,
  complete,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const removeTodoHandler = (id: string) => {
    fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data: ITodo) => {
        dispatch(removeTodo(data._id));
        navigate(TODO_ROUTE);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className={styles["todo-item_right"]}>
      {isLogic ? (
        <div onClick={() => isLogic && navigate(`${TODO_ROUTE}/${id}`)}>
          <img
            src={vision48}
            alt="vision48"
            className={styles["todo-item_vision"]}
          />
        </div>
      ) : (
        <>
          {!complete && <PenIcon />}
          <div
            className={styles["todo-item_remove"]}
            onClick={() => removeTodoHandler(id)}
          >
            x
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItemRight;
