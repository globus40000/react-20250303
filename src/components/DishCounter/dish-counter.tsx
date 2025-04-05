import { FC } from "react";
import { Counter } from "../Counter/counter";
import { useAmount } from "./use-amount";
import { Identifier } from "../../types";

interface IDishCounterProps {
  id: Identifier;
  min?: number;
  max?: number;
}

export const DishCounter: FC<IDishCounterProps> = ({ id, min, max }) => {
  const { amount, increment, decrement } = useAmount(id);

  return (
    <Counter
      count={amount}
      onIncrement={increment}
      onDecrement={decrement}
      min={min}
      max={max}
    />
  );
};
