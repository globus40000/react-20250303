import { FC } from "react";
import { Layout } from "../Layout/layout";
import { RestaurantsPage } from "../RestaurantsPage/restaurants-page";

import "./reset.css";
import "./app.css";

export const App: FC = () => {
  return (
    <div className="app">
      <Layout>
        <RestaurantsPage />
      </Layout>
    </div>
  );
};
