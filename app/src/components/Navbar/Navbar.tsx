import React from "react";
import styels from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { HOME_ROUTE, TODO_ROUTE } from "../../utils/const";
import styles from "./Navbar.module.css";
import Container from "../../UI/Container/Container";

const Navbar = () => {
  return (
    <div className={styles.navbar_wrap}>
      <Container className={styles.navbar}>
        <Link to={HOME_ROUTE} className={styles.navbar_item}>
          Home
        </Link>
        <Link to={TODO_ROUTE} className={styles.navbar_item}>
          Todos
        </Link>
      </Container>
    </div>
  );
};

export default Navbar;
