import { FC } from "react";
import { IRestaurantNormalized } from "../../types";
import { Outlet } from "react-router";
import { RestaurantsTabs } from "../../components/RestaurantsTabs/restaurants-tabs";

import styles from "./restaurants-page.module.css";

interface IRestaurantsPageProps {
  restaurants: IRestaurantNormalized[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export const RestaurantsPage: FC<IRestaurantsPageProps> = ({
  restaurants,
  isLoading,
  isError,
  errorMessage,
}) => {
  return (
    <div className={styles.root}>
      <h1>Restaurants</h1>
      <div className={styles.tabs}>
        <RestaurantsTabs
          restaurants={restaurants}
          isLoading={isLoading}
          isError={isError}
          errorMessage={errorMessage}
        />
      </div>
      <Outlet />
    </div>
  );
};
