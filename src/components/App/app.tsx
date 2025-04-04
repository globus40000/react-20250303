import { FC } from "react";
import { Layout } from "../Layout/layout";
import { RestaurantsPage } from "../RestaurantsPage/restaurants-page";
import { ThemeContextProvider } from "../ThemeContextProvider/theme-context-provider";
import { AuthContextProvider } from "../AuthContextProvider/auth-context-provider";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

import "./reset.css";
import "./app.css";

export const App: FC = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RestaurantsPage />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
