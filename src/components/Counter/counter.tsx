import { FC } from "react";
import { Button } from "../Button/button";

interface ICounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
  max?: number;
}

export const Counter: FC<ICounterProps> = ({
  count,
  onIncrement,
  onDecrement,
  min,
  max,
}) => {
  return (
    <div className="counter">
      <Button type="button" onClick={onIncrement} disabled={count === max}>
        +
      </Button>
      {count}
      <Button type="button" onClick={onDecrement} disabled={count === min}>
        -
      </Button>
    </div>
  );
};
