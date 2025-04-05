import { FC } from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/entities/cart/slice";
import { Cart } from "./cart";

interface ICartContainerProps {
  className?: string;
}

export const CartContainer: FC<ICartContainerProps> = ({ className }) => {
  const items = useSelector(selectCartItems);

  return <Cart items={items} className={className} />;
};
