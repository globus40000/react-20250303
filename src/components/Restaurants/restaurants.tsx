import { FC, useState } from "react";
import { IRestaurant } from "../../types";
import { Restaurant } from "../Restaurant/restaurant";

interface IRestaurantsProps {
  restaurants: IRestaurant[];
}

export const Restaurants: FC<IRestaurantsProps> = ({ restaurants }) => {
  const [selectedId, setSelectedId] = useState(restaurants[0]?.id);
  const selectedRestaurant = restaurants.find(({ id }) => id === selectedId);

  return (
    <div className="restaurants">
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
