import { FC } from "react";
import { useSelector } from "react-redux";
import { selectCartDishes } from "../../redux/entities/cart/slice";
import { Cart } from "./cart";

interface ICartContainerProps {
  className?: string;
}

export const CartContainer: FC<ICartContainerProps> = ({ className }) => {
  const dishes = useSelector(selectCartDishes);

  return <Cart dishes={dishes} className={className} />;
};
