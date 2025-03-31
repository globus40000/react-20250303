import { FC } from "react";
import { Counter } from "../Counter/counter";
import { useCount } from "./use-count";

interface IDishCounterProps {
  initial?: number;
  min?: number;
  max?: number;
}

export const DishCounter: FC<IDishCounterProps> = ({ initial, min, max }) => {
  const { count, increment, decrement } = useCount(initial, min, max);

  return (
    <div className="dish-counter">
      <Counter
        count={count}
        onIncrement={increment}
        onDecrement={decrement}
        min={min}
        max={max}
      />
    </div>
  );
};
