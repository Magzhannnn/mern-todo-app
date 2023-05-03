import React from "react";
import styles from "./Loading.module.css";

interface LoadingProps {
  title: string;
}

const Loading: React.FC<LoadingProps> = ({ title }) => {
  return <div className={styles.loading}>Loading {title}...</div>;
};

export default Loading;
