import { FC } from "react";
import { CartItem } from "./cart-item";
import { Identifier } from "../../types";
import { useSelector } from "react-redux";
import { selectAmountByDishId } from "../../redux/entities/cart/slice";
import { IRootState } from "../../redux/store";
import { selectDishById } from "../../redux/entities/dish/slice";

interface ICartItemContainerProps {
  id: Identifier;
}

export const CartItemContainer: FC<ICartItemContainerProps> = ({ id }) => {
  const dish = useSelector((state: IRootState) => selectDishById(state, id));
  const amount =
    useSelector((state: IRootState) => selectAmountByDishId(state, id)) ?? 0;

  if (!dish) {
    return null;
  }

  return <CartItem dishName={dish.name} amount={amount} />;
};
