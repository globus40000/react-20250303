import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { restaurants } from "../materials/mock";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found.");
}

/**
 * Variant using `createElement` function.
 */
/*createRoot(root).render(
  <StrictMode>
    {restaurants.map((restaurant) =>
      createElement(
        "div",
        { key: restaurant.id },
        createElement("h2", {}, restaurant.name),
        createElement("h3", {}, "Menu"),
        createElement(
          "ul",
          {},
          restaurant.menu.map((dish) =>
            createElement("li", { key: dish.id }, dish.name),
          ),
        ),
        createElement("h3", {}, "Reviews"),
        createElement(
          "ul",
          {},
          restaurant.reviews.map((review) =>
            createElement("li", { key: review.id }, review.text),
          ),
        ),
      ),
    )}
  </StrictMode>,
);*/

/**
 * Variant using JSX.
 */
createRoot(root).render(
  <StrictMode>
    <h1>Restaurants</h1>
    {restaurants.map(({ id, name, menu, reviews }) => (
      <div key={id}>
        <h2>{name}</h2>
        <h3>Menu</h3>
        <ul>
          {menu.map((dish) => (
            <li key={dish.id}>{dish.name}</li>
          ))}
        </ul>
        <h3>Reviews</h3>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>{review.text}</li>
          ))}
        </ul>
      </div>
    ))}
  </StrictMode>
);
