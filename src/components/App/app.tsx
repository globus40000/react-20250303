import { FC } from "react";
import { restaurants } from "../../mocks/restaurants";
import { Layout } from "../Layout/layout";
import { Restaurants } from "../Restaurants/restaurants";

export const App: FC = () => {
  return (
    <div className="app">
      <Layout>
        <h1>Restaurants</h1>
        <Restaurants restaurants={restaurants} />
      </Layout>
    </div>
  );
};
