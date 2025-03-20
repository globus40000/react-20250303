import { FC, useMemo, useState } from "react";
import { Restaurant } from "../Restaurant/restaurant";
import { restaurants } from "../../mocks/restaurants";

export const Restaurants: FC = () => {
  const [selectedId, setSelectedId] = useState(restaurants[0]?.id);
  const selectedRestaurant = useMemo(
    () => restaurants.find(({ id }) => id === selectedId),
    [selectedId]
  );

  return (
    <div className="restaurants">
      <h1>Restaurants</h1>
      <div className="tabs">
        {restaurants.map(({ id, name }) => (
          <button
            type="button"
            key={id}
            onClick={() => {
              setSelectedId(id);
            }}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="selected">
        {selectedRestaurant && <Restaurant restaurant={selectedRestaurant} />}
      </div>
    </div>
  );
};
