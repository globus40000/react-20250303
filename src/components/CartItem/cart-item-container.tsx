import { FC } from "react";
import { Identifier } from "../../types";
import { CartItem } from "./cart-item";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/slice";
import { IRootState } from "../../redux/store";

interface ICartItemContainerProps {
  id: Identifier;
}

export const CartItemContainer: FC<ICartItemContainerProps> = ({ id }) => {
  const dish = useSelector<IRootState, ReturnType<typeof selectDishById>>(
    (state) => selectDishById(state, id)
  );

  if (!dish) {
    return null;
  }

  return <CartItem dish={dish} />;
};
