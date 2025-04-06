import { FC, use } from "react";
import { IDishNormalized } from "../../types";
import { DishCounter } from "../DishCounter/dish-counter";
import { AuthContext } from "../AuthContextProvider/auth-context";

interface IDishProps {
  dish: IDishNormalized;
}

export const Dish: FC<IDishProps> = ({ dish }) => {
  const { isAuthorized } = use(AuthContext);
  const { id, name } = dish;

  return (
    <div>
      {name}
      {isAuthorized && <DishCounter id={id} />}
    </div>
  );
};
