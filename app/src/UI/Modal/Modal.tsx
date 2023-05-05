import React from "react";
import styles from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootRedcuer";
import { ModalActionTypes } from "../../types/modal";

interface ModalProps {
  children: React.ReactElement;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const dispatch = useDispatch();
  const isModal = useSelector((state: RootState) => state.modal);

  return (
    <div
      className={isModal ? `${styles.modal} ${styles.active}` : styles.modal}
    >
      <div
        className={styles.overflow}
        onClick={() => dispatch({ type: ModalActionTypes.CLOSE_MODAL })}
      ></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Modal;
