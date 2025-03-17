import { FC, useState } from "react";
import { Counter } from "../Counter/counter";

interface IDishCounterProps {
  initial?: number;
  min?: number;
  max?: number;
}

export const DishCounter: FC<IDishCounterProps> = ({
  initial = 0,
  min,
  max,
}) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (typeof max !== "number" || count < max) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (typeof min !== "number" || count > min) {
      setCount(count - 1);
    }
  };

  return (
    <div className="dish-counter">
      <Counter count={count} onIncrement={increment} onDecrement={decrement} />
    </div>
  );
};
