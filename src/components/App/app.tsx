import { FC } from "react";
import { Layout } from "../Layout/layout";
import { Restaurants } from "../Restaurants/restaurants";

import "./app.css";

export const App: FC = () => {
  return (
    <div className="app">
      <Layout>
        <Restaurants />
      </Layout>
    </div>
  );
};
