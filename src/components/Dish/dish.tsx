import { FC, use } from "react";
import { IDishNormalized } from "../../types";
import { AuthContext } from "../AuthContextProvider/auth-context";
import { DishName } from "../DishName/dish-name";
import { DishIngredients } from "../DishIngredients/dish-ingredients";
import { DishPrice } from "../DishPrice/dish-price";
import { Skeleton } from "../Skeleton/skeleton";
import { DishCounter } from "../DishCounter/dish-counter";
import { Notification } from "../Notification/notification";

import styles from "./dish.module.css";

interface IDishProps {
  dish: IDishNormalized | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export const Dish: FC<IDishProps> = ({
  dish,
  isLoading,
  isError,
  errorMessage,
}) => {
  const { isAuthorized } = use(AuthContext);

  return (
    <div>
      <DishName dish={dish} isLoading={isLoading} className={styles.name} />
      <DishIngredients
        dish={dish}
        isLoading={isLoading}
        className={styles.block}
      />
      <DishPrice dish={dish} isLoading={isLoading} className={styles.block} />
      {isAuthorized &&
        (isLoading ? (
          <Skeleton variant="rectangular" width={100} height={31} />
        ) : (
          !isError && dish && <DishCounter dish={dish} />
        ))}
      {isError && <Notification message={errorMessage} />}
    </div>
  );
};
