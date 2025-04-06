import { FC } from "react";
import { Counter } from "../Counter/counter";
import { useAmount } from "./use-amount";
import { Identifier } from "../../types";
import { AMOUNT_MAX, AMOUNT_MIN } from "../../redux/entities/cart/slice";

interface IDishCounterProps {
  id: Identifier;
}

export const DishCounter: FC<IDishCounterProps> = ({ id }) => {
  const { amount, increment, decrement } = useAmount(id);

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
