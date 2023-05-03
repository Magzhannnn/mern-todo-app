import React from "react";
import styles from "./Error.module.css";

interface ErrorProps {
  title: string;
}

const Error: React.FC<ErrorProps> = ({ title }) => {
  return <div className={styles.error}>Error: {title}</div>;
};

export default Error;
