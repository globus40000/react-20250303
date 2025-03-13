import { IDish } from "../../../types";

export const Dish = ({ dish }: { dish: IDish }) => {
  return <div className="dish">{dish.name}</div>;
};
