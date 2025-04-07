import { FC } from "react";
import { Layout } from "../Layout/layout";
import { ThemeContextProvider } from "../ThemeContextProvider/theme-context-provider";
import { AuthContextProvider } from "../AuthContextProvider/auth-context-provider";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { RestaurantsPageContainer } from "../../pages/RestaurantsPage/restaurants-page-container";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "../../pages/HomePage/home-page";
import { RestaurantPage } from "../../pages/RestaurantPage/restaurant-page";

import "./reset.css";
import "./app.css";

export const App: FC = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route
                  path="/restaurants"
                  element={<RestaurantsPageContainer />}
                >
                  <Route path=":restaurantId" element={<RestaurantPage />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
