import { FC, useState } from "react";
import { Restaurant } from "../Restaurant/restaurant";
import { restaurants } from "../../mocks/restaurants";
import { Tab } from "../Tab/tab";

import styles from "./restaurants-page.module.css";

export const RestaurantsPage: FC = () => {
  const [selectedId, setSelectedId] = useState(restaurants[0]?.id);
  const selectedRestaurant = restaurants.find(({ id }) => id === selectedId);

  return (
    <div className={styles.root}>
      <h1>Restaurants</h1>
      <div className={styles.tabs}>
        {restaurants.map(({ id, name }) => (
          <Tab
            key={id}
            title={name}
            isActive={id === selectedId}
            onClick={() => {
              setSelectedId(id);
            }}
          />
        ))}
      </div>
      {selectedRestaurant && <Restaurant restaurant={selectedRestaurant} />}
    </div>
  );
};
