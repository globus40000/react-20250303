import { useCallback, useState } from "react";

export const useCount = (initial = 0, min?: number, max?: number) => {
  const [count, setCount] = useState(initial);

  const increment = useCallback(() => {
    setCount((c) => {
      const canIncrement = typeof max !== "number" || c < max;

      return canIncrement ? c + 1 : c;
    });
  }, [max]);

  const decrement = useCallback(() => {
    setCount((c) => {
      const canDecrement = typeof min !== "number" || c > min;

      return canDecrement ? c - 1 : c;
    });
  }, [min]);

  return { count, increment, decrement };
};
