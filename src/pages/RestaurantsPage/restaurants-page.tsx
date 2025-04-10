import { FC } from "react";
import { RestaurantTabContainer } from "../../components/RestaurantTab/restaurant-tab-container";
import { Identifier, RequestStatus } from "../../types";
import { Outlet } from "react-router";
import { Skeleton } from "../../components/Skeleton/skeleton";

import styles from "./restaurants-page.module.css";

interface IRestaurantsPageProps {
  restaurantsIds: Identifier[];
  requestStatus: RequestStatus;
}

export const RestaurantsPage: FC<IRestaurantsPageProps> = ({
  restaurantsIds,
  requestStatus,
}) => {
  return (
    <div className={styles.root}>
      <h1>Restaurants</h1>
      <div className={styles.tabs}>
        {requestStatus === RequestStatus.pending ? (
          <Skeleton variant="rectangular" width={400} height={35} />
        ) : (
          restaurantsIds.map((id) => (
            <RestaurantTabContainer key={id} id={id} />
          ))
        )}
      </div>
      <Outlet />
    </div>
  );
};
