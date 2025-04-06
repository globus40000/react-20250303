import { FC } from "react";
import { useSelector } from "react-redux";
import { selectCartDishesIds } from "../../redux/entities/cart/slice";
import { Cart } from "./cart";

interface ICartContainerProps {
  className?: string;
}

export const CartContainer: FC<ICartContainerProps> = ({ className }) => {
  const dishesIds = useSelector(selectCartDishesIds);

  return <Cart dishesIds={dishesIds} className={className} />;
};
