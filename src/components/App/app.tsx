import { FC } from "react";
import { Layout } from "../Layout/layout";
import { ThemeContextProvider } from "../ThemeContextProvider/theme-context-provider";
import { AuthContextProvider } from "../AuthContextProvider/auth-context-provider";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { RestaurantsPageContainer } from "../RestaurantsPage/restaurants-page-container";

import "./reset.css";
import "./app.css";

export const App: FC = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RestaurantsPageContainer />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
