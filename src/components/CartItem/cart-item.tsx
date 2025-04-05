import { FC } from "react";

interface ICartItemProps {
  dishName: string;
  amount: number;
}

export const CartItem: FC<ICartItemProps> = ({ dishName, amount }) => {
  return (
    <div>
      {dishName} - {amount}
    </div>
  );
};
