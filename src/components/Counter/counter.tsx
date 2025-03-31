import { FC } from "react";

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
      <button type="button" onClick={onIncrement} disabled={count === max}>
        +
      </button>
      {count}
      <button type="button" onClick={onDecrement} disabled={count === min}>
        -
      </button>
    </div>
  );
};
