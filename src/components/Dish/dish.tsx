import { FC, use } from "react";
import { IDish } from "../../types";
import { DishCounter } from "../DishCounter/dish-counter";
import { AuthContextProvider } from "../AuthContext/provider";

interface IDishProps {
  dish: IDish;
}

export const Dish: FC<IDishProps> = ({ dish }) => {
  const { isAuthorized } = use(AuthContextProvider);

  return (
    <div>
      {dish.name}
      {isAuthorized && <DishCounter min={0} max={5} />}
    </div>
  );
};
