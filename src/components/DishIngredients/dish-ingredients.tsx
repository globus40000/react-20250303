import { FC } from "react";
import { IDishNormalized } from "../../types";
import { Skeleton } from "../Skeleton/skeleton";
import classNames from "classnames";

import styles from "./dish-ingredients.module.css";
import { IngredientsList } from "../IngredientsList/ingredients-list";

interface IDishIngredientsProps {
  dish: IDishNormalized | undefined;
  isLoading: boolean;
  className?: string;
}

export const DishIngredients: FC<IDishIngredientsProps> = ({
  dish,
  isLoading,
  className,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Ingredients</h3>
      {isLoading ? (
        <Skeleton variant="rectangular" width={200} height={50} />
      ) : (
        <IngredientsList ingredients={dish?.ingredients ?? []} />
      )}
    </div>
  );
};
