import { FC } from "react";
import { Layout } from "../Layout/layout";
import { RestaurantsPage } from "../RestaurantsPage/restaurants-page";
import { ThemeContext } from "../ThemeContext/theme-context";
import { AuthContext } from "../AuthContext/auth-context";

import "./reset.css";
import "./app.css";

export const App: FC = () => {
  return (
    <AuthContext>
      <ThemeContext>
        <Layout>
          <RestaurantsPage />
        </Layout>
      </ThemeContext>
    </AuthContext>
  );
};
