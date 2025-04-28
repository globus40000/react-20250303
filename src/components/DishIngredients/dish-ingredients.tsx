import { FC } from "react";
import { IDishNormalized, RequestStatus } from "../../types";
import { Skeleton } from "../Skeleton/skeleton";
import classNames from "classnames";

import styles from "./dish-ingredients.module.css";

interface IDishIngredientsProps {
  dish: IDishNormalized | undefined;
  requestStatus: RequestStatus;
  className?: string;
}

export const DishIngredients: FC<IDishIngredientsProps> = ({
  dish,
  requestStatus,
  className,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Ingredients</h3>
      {requestStatus === RequestStatus.pending ? (
        <Skeleton variant="rectangular" width={200} height={50} />
      ) : (
        <ul role="list">
          {(dish?.ingredients ?? []).map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
