import React, { useState } from "react";
import styles from "./Todos.module.css";
import { useDispatch } from "react-redux";
import { ModalActionTypes } from "../../types/modal";
import Modal from "../../UI/Modal/Modal";
import TodoForm from "./TodoForm";


const AddTodo = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={styles["add-todo"]}
        onClick={() => dispatch({ type: ModalActionTypes.OPEN_MODAL })}
      >
        +
      </div>
      <Modal>
        <TodoForm />
      </Modal>
    </>
  );
};

export default AddTodo;
