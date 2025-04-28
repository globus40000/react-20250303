import { FC, use } from "react";
import { IDishNormalized, RequestStatus } from "../../types";
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
  requestStatus: RequestStatus;
  errorMessage: string;
}

export const Dish: FC<IDishProps> = ({ dish, requestStatus, errorMessage }) => {
  const { isAuthorized } = use(AuthContext);
  const isPending = requestStatus === RequestStatus.pending;
  const isRejected = requestStatus === RequestStatus.rejected;

  return (
    <div>
      <DishName
        dish={dish}
        requestStatus={requestStatus}
        className={styles.name}
      />
      <DishIngredients
        dish={dish}
        requestStatus={requestStatus}
        className={styles.block}
      />
      <DishPrice
        dish={dish}
        requestStatus={requestStatus}
        className={styles.block}
      />
      {isAuthorized &&
        (isPending ? (
          <Skeleton variant="rectangular" width={100} height={31} />
        ) : (
          !isRejected && dish && <DishCounter id={dish.id} />
        ))}
      {isRejected && <Notification message={errorMessage} />}
    </div>
  );
};
