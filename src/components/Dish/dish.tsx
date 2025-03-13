import { IDish } from "../../types";
import { Counter } from "../Counter/counter";

export const Dish = ({ dish }: { dish: IDish }) => {
  return (
    <div className="dish">
      {dish.name}
      <Counter min={0} max={5} />
    </div>
  );
};
