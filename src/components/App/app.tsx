import { FC } from "react";
import { Layout } from "../Layout/layout";
import { ThemeContextProvider } from "../ThemeContextProvider/theme-context-provider";
import { AuthContextProvider } from "../AuthContextProvider/auth-context-provider";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { RestaurantsPageContainer } from "../../pages/RestaurantsPage/restaurants-page-container";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { HomePage } from "../../pages/HomePage/home-page";
import { RestaurantPage } from "../../pages/RestaurantPage/restaurant-page";
import { NotFoundPage } from "../../pages/NotFoundPage/not-found-page";
import { MenuPage } from "../../pages/MenuPage/menu-page";
import { ReviewsPage } from "../../pages/ReviewsPage/reviews-page";
import { DishPage } from "../../pages/DishPage/dish-page";

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
                  <Route index element={<div>Select restaurant please</div>} />
                  <Route path=":restaurantId" element={<RestaurantPage />}>
                    <Route index element={<Navigate to="menu" />} />
                    <Route path="menu" element={<MenuPage />} />
                    <Route path="reviews" element={<ReviewsPage />} />
                  </Route>
                </Route>
                <Route path="/dish/:dishId" element={<DishPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
