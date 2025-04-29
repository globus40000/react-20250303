import { FC } from "react";
import { IRestaurantNormalized } from "../../types";
import { Tab } from "../Tab/tab";
import { Outlet } from "react-router";
import { RestaurantName } from "../RestaurantName/restaurant-name";

import styles from "./restaurant.module.css";

interface IRestaurantProps {
  restaurant: IRestaurantNormalized | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export const Restaurant: FC<IRestaurantProps> = ({
  restaurant,
  isLoading,
  isError,
  errorMessage,
}) => {
  return (
    <div className={styles.root}>
      <RestaurantName
        restaurant={restaurant}
        isLoading={isLoading}
        isError={isError}
        errorMessage={errorMessage}
        className={styles.skeleton}
      />
      <div className={styles.tabs}>
        <Tab title="Menu" to="menu" />
        <Tab title="Reviews" to="reviews" />
      </div>
      <Outlet />
    </div>
  );
};
