import React from "react";
import styles from "./MyTitle.module.css";

interface MyTitleProps {
  title: string;
}

const MyTitle: React.FC<MyTitleProps> = ({ title }) => {
  return <div className={styles.title}>{title}</div>;
};

export default MyTitle;
