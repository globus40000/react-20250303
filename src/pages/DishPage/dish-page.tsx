import { FC, use } from "react";
import { IDishNormalized, RequestStatus } from "../../types";
import { AuthContext } from "../../components/AuthContextProvider/auth-context";
import { DishCounter } from "../../components/DishCounter/dish-counter";
import { Skeleton } from "../../components/Skeleton/skeleton";
import { Notification } from "../../components/Notification/notification";
import { DishName } from "../../components/DishName/dish-name";
import { DishIngredients } from "../../components/DishIngredients/dish-ingredients";
import { DishPrice } from "../../components/DishPrice/dish-price";

import styles from "./dish-page.module.css";

interface IDishPageProps {
  dish: IDishNormalized | undefined;
  requestStatus: RequestStatus;
  errorMessage: string;
}

export const DishPage: FC<IDishPageProps> = ({
  dish,
  requestStatus,
  errorMessage,
}) => {
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
