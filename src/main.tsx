import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { restaurants } from "../materials/mock";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found.");
}

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
