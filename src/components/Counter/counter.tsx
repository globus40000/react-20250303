import { FC, useState } from "react";

interface ICounterProps {
  initial?: number;
  min?: number;
  max?: number;
}

export const Counter: FC<ICounterProps> = ({ initial = 0, min, max }) => {
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
    <div className="counter">
      <button type="button" onClick={increment}>
        +
      </button>
      {count}
      <button type="button" onClick={decrement}>
        -
      </button>
    </div>
  );
};
