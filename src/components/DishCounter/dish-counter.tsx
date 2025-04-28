import { FC } from "react";
import { Counter } from "../Counter/counter";
import { useAmount } from "./use-amount";
import { IDishNormalized } from "../../types";
import { AMOUNT_MAX, AMOUNT_MIN } from "../../redux/entities/cart/slice";

interface IDishCounterProps {
  dish: IDishNormalized;
}

export const DishCounter: FC<IDishCounterProps> = ({ dish }) => {
  const { amount, increment, decrement } = useAmount(dish);

  return (
    <Counter
      count={amount}
      onIncrement={increment}
      onDecrement={decrement}
      min={AMOUNT_MIN}
      max={AMOUNT_MAX}
    />
  );
};
