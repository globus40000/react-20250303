import { FC } from "react";
import { IRestaurant } from "../../types";
import { Menu } from "../Menu/menu";
import { Reviews } from "../Reviews/reviews";

import styles from "./restaurant.module.css";

interface IRestaurantProps {
  restaurant: IRestaurant;
}

export const Restaurant: FC<IRestaurantProps> = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <div className={styles.root}>
      <h2>{name}</h2>
      <Menu menu={menu} className={styles.menu} />
      <Reviews reviews={reviews} textNoReviews="No reviews yet." />
    </div>
  );
};
