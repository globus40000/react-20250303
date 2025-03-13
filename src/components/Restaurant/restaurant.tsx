import { IRestaurant } from "../../types";
import { Menu } from "../Menu/menu";
import { Reviews } from "../Reviews/reviews";

export const Restaurant = ({ restaurant }: { restaurant: IRestaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <div className="restaurant">
      <h2>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} textNoReviews="No reviews yet." />
    </div>
  );
};
