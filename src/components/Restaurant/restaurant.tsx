import { FC } from "react";
import { IRestaurantNormalized } from "../../types";
import { Tab } from "../Tab/tab";
import { Outlet } from "react-router";

import styles from "./restaurant.module.css";

interface IRestaurantProps {
  restaurant: IRestaurantNormalized;
}

export const Restaurant: FC<IRestaurantProps> = ({ restaurant }) => {
  const { name } = restaurant;

  return (
    <div className={styles.root}>
      <h2>{name}</h2>
      <div className={styles.tabs}>
        <Tab title="Menu" to="menu" />
        <Tab title="Reviews" to="reviews" />
      </div>
      <Outlet />
    </div>
  );
};
