import { useState } from "react";

export const useCount = (initial = 0, min?: number, max?: number) => {
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

  return { count, increment, decrement };
};
