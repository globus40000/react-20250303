import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurant/slice";
import { RestaurantContainer } from "../Restaurant/restaurant-container";
import { RestaurantTabContainer } from "../RestaurantTab/restaurant-tab-container";

import styles from "./restaurants-page.module.css";

export const RestaurantsPage: FC = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
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
