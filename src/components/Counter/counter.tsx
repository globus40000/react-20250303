import { FC } from "react";
import { Button } from "../Button/button";
import classNames from "classnames";

import styles from "./counter.module.css";

interface ICounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
  max?: number;
  className?: string;
}

export const Counter: FC<ICounterProps> = ({
  count,
  onIncrement,
  onDecrement,
  min,
  max,
  className,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
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
