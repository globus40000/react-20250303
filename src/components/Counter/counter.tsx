import { FC } from "react";
import { Button } from "../Button/button";

import styles from "./counter.module.css";

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
    <div className={styles.root}>
      <Button type="button" onClick={onIncrement} disabled={count === max}>
        +
      </Button>
      <span>{count}</span>
      <Button type="button" onClick={onDecrement} disabled={count === min}>
        -
      </Button>
    </div>
  );
};
