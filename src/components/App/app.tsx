import { FC } from "react";
import { Layout } from "../Layout/layout";
import { RestaurantsPage } from "../RestaurantsPage/restaurants-page";
import { ThemeContextProvider } from "../ThemeContextProvider/theme-context-provider";
import { AuthContext } from "../AuthContext/auth-context";

import "./reset.css";
import "./app.css";

export const App: FC = () => {
  return (
    <AuthContext>
      <ThemeContextProvider>
        <Layout>
          <RestaurantsPage />
        </Layout>
      </ThemeContextProvider>
    </AuthContext>
  );
};
