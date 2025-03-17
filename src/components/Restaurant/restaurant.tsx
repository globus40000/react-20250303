import { FC } from "react";
import { IRestaurant } from "../../types";
import { Menu } from "../Menu/menu";
import { Reviews } from "../Reviews/reviews";

interface IRestaurantProps {
  restaurant: IRestaurant;
}

export const Restaurant: FC<IRestaurantProps> = ({ restaurant }) => {
  const { id, name, menu, reviews } = restaurant;

  return (
    <div className="restaurant">
      <h2>{name}</h2>
      <Menu menu={menu} />
      <Reviews
        reviews={reviews}
        textNoReviews="No reviews yet."
        restaurantId={id}
      />
    </div>
  );
};
