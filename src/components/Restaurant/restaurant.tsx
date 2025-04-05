import { FC } from "react";
import { IRestaurantNormalized } from "../../types";
import { Menu } from "../Menu/menu";
import { Reviews } from "../Reviews/reviews";

import styles from "./restaurant.module.css";

interface IRestaurantProps {
  restaurant: IRestaurantNormalized;
}

export const Restaurant: FC<IRestaurantProps> = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <div className={styles.root}>
      <h2>{name}</h2>
      <Menu dishesIds={menu} className={styles.menu} />
      <Reviews reviewsIds={reviews} textNoReviews="No reviews yet." />
    </div>
  );
};
