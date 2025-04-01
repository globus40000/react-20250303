import { FC } from "react";
import { IDish } from "../../types";
import { DishCounter } from "../DishCounter/dish-counter";

interface IDishProps {
  dish: IDish;
}

export const Dish: FC<IDishProps> = ({ dish }) => {
  return (
    <div>
      {dish.name}
      <DishCounter min={0} max={5} />
    </div>
  );
};
