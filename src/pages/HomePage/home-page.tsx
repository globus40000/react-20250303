import { FC } from "react";
import { Link } from "react-router";

import styles from "./home-page.module.css";

export const HomePage: FC = () => {
  return (
    <div className={styles.root}>
      <h1>Order food</h1>
      <Link to="/restaurants">To restaurants</Link>
    </div>
  );
};
