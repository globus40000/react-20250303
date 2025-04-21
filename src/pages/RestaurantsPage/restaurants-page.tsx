import { FC } from "react";
import { Identifier, RequestStatus } from "../../types";
import { Outlet } from "react-router";
import { RestaurantsTabs } from "../../components/RestaurantsTabs/restaurants-tabs";

import styles from "./restaurants-page.module.css";

interface IRestaurantsPageProps {
  restaurantsIds: Identifier[];
  requestStatus: RequestStatus;
  errorMessage: string;
}

export const RestaurantsPage: FC<IRestaurantsPageProps> = ({
  restaurantsIds,
  requestStatus,
  errorMessage,
}) => {
  return (
    <div className={styles.root}>
      <h1>Restaurants</h1>
      <div className={styles.tabs}>
        <RestaurantsTabs
          restaurantsIds={restaurantsIds}
          requestStatus={requestStatus}
          errorMessage={errorMessage}
        />
      </div>
      <Outlet />
    </div>
  );
};
