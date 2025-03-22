import { useCallback, useState } from "react";

export const useCount = (initial = 0, min?: number, max?: number) => {
  const [count, setCount] = useState(initial);

  const increment = useCallback(() => {
    setCount((value) => {
      const canIncrement = typeof max !== "number" || value < max;

      return canIncrement ? value + 1 : value;
    });
  }, [max]);

  const decrement = useCallback(() => {
    setCount((value) => {
      const canDecrement = typeof min !== "number" || value > min;

      return canDecrement ? value - 1 : value;
    });
  }, [min]);

  return { count, increment, decrement };
};
