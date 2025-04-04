import { FC, use } from "react";
import { IDish } from "../../types";
import { DishCounter } from "../DishCounter/dish-counter";
import { AuthContext } from "../AuthContextProvider/auth-context";

interface IDishProps {
  dish: IDish;
}

export const Dish: FC<IDishProps> = ({ dish }) => {
  const { isAuthorized } = use(AuthContext);

  return (
    <div>
      {dish.name}
      {isAuthorized && <DishCounter min={0} max={5} />}
    </div>
  );
};
