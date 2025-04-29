import { FC, use } from "react";
import { IDishNormalized } from "../../types";
import { DishCounter } from "../DishCounter/dish-counter";
import { AuthContext } from "../AuthContextProvider/auth-context";

interface ICartItemProps {
  dish: IDishNormalized;
}

export const CartItem: FC<ICartItemProps> = ({ dish }) => {
  const { isAuthorized } = use(AuthContext);
  const { name } = dish;

  return (
    <div>
      {name}
      {isAuthorized && <DishCounter dish={dish} />}
    </div>
  );
};
