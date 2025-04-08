import { FC } from "react";
import { RestaurantTabContainer } from "../../components/RestaurantTab/restaurant-tab-container";
import { Identifier } from "../../types";
import { Outlet } from "react-router";

import styles from "./restaurants-page.module.css";

interface IRestaurantsPageProps {
  restaurantsIds: Identifier[];
}

export const RestaurantsPage: FC<IRestaurantsPageProps> = ({
  restaurantsIds,
}) => {
  return (
    <div className={styles.root}>
      <h1>Restaurants</h1>
      <div className={styles.tabs}>
        {restaurantsIds.map((id) => (
          <RestaurantTabContainer key={id} id={id} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};
