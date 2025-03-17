import { FC } from "react";
import { IDish } from "../../types";
import { Counter } from "../Counter/counter";

interface IDishProps {
  dish: IDish;
}

export const Dish: FC<IDishProps> = ({ dish }) => {
  return (
    <div className="dish">
      {dish.name}
      <Counter min={0} max={5} />
    </div>
  );
};
