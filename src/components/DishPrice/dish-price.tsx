import { FC } from "react";
import { Skeleton } from "../Skeleton/skeleton";
import { IDishNormalized } from "../../types";
import classNames from "classnames";

import styles from "./dish-price.module.css";

interface IDishPriceProps {
  dish: IDishNormalized | undefined;
  isLoading: boolean;
  className?: string;
}

export const DishPrice: FC<IDishPriceProps> = ({
  dish,
  isLoading,
  className,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Price</h3>
      {isLoading ? (
        <div className={styles.skeleton}>
          <Skeleton variant="text" width={200} fontSize={16} />
        </div>
      ) : (
        <div>{dish?.price} USD</div>
      )}
    </div>
  );
};
