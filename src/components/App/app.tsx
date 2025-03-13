import { restaurants } from "../../mocks/restaurants";
import { Layout } from "../Layout/layout";
import { Restaurant } from "../Restaurant/restaurant";

export const App = () => {
  return (
    <div className="app">
      <Layout>
        <h1>Restaurants</h1>
        {restaurants.map((restaurant) => (
          <Restaurant restaurant={restaurant} key={restaurant.id} />
        ))}
      </Layout>
    </div>
  );
};
