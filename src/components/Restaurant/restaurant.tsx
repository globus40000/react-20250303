import { FC } from "react";
import { IRestaurantNormalized, RequestStatus } from "../../types";
import { Tab } from "../Tab/tab";
import { Outlet } from "react-router";
import { RestaurantName } from "../RestaurantName/restaurant-name";

import styles from "./restaurant.module.css";

interface IRestaurantProps {
  restaurant: IRestaurantNormalized | undefined;
  requestStatus: RequestStatus;
  errorMessage: string;
}

export const Restaurant: FC<IRestaurantProps> = ({
  restaurant,
  requestStatus,
  errorMessage,
}) => {
  return (
    <div className={styles.root}>
      <RestaurantName
        restaurant={restaurant}
        requestStatus={requestStatus}
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
