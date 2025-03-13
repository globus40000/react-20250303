import { restaurants } from "../../mocks/restaurants";
import { Restaurant } from "../Restaurant/restaurant";

export const App = () => {
  return (
    <div className="app">
      <h1>Restaurants</h1>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} key={restaurant.id} />
      ))}
    </div>
  );
};
