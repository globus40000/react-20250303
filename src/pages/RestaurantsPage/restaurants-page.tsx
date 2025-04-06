import { FC, useState } from "react";
import { RestaurantContainer } from "../../components/Restaurant/restaurant-container";
import { RestaurantTabContainer } from "../../components/RestaurantTab/restaurant-tab-container";
import { Identifier } from "../../types";

import styles from "./restaurants-page.module.css";

interface IRestaurantsPageProps {
  restaurantsIds: Identifier[];
}

export const RestaurantsPage: FC<IRestaurantsPageProps> = ({
  restaurantsIds,
}) => {
  const [selectedId, setSelectedId] = useState(restaurantsIds[0]);

  return (
    <div className={styles.root}>
      <h1>Restaurants</h1>
      <div className={styles.tabs}>
        {restaurantsIds.map((id) => (
          <RestaurantTabContainer
            key={id}
            id={id}
            isActive={id === selectedId}
            onClick={() => {
              setSelectedId(id);
            }}
          />
        ))}
      </div>
      {selectedId && <RestaurantContainer id={selectedId} />}
    </div>
  );
};
