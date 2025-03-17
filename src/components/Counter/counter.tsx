import { FC } from "react";

interface ICounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const Counter: FC<ICounterProps> = ({
  count,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div className="counter">
      <button type="button" onClick={onIncrement}>
        +
      </button>
      {count}
      <button type="button" onClick={onDecrement}>
        -
      </button>
    </div>
  );
};
