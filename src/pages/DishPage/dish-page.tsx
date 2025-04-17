import { FC, use } from "react";
import { IDishNormalized, RequestStatus } from "../../types";
import { AuthContext } from "../../components/AuthContextProvider/auth-context";
import { DishCounter } from "../../components/DishCounter/dish-counter";
import { Skeleton } from "../../components/Skeleton/skeleton";
import { Notification } from "../../components/Notification/notification";

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
    <div className={styles.root}>
      {isPending ? (
        <Skeleton
          variant="text"
          width={200}
          fontSize={24}
          className={styles.skeletonName}
        />
      ) : (
        <h1>{dish?.name}</h1>
      )}
      <div className={styles.block}>
        <h3>Ingredients</h3>
        {isPending ? (
          <Skeleton variant="rectangular" width={200} height={50} />
        ) : (
          <ul role="list">
            {(dish?.ingredients ?? []).map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.block}>
        <h3>Price</h3>
        {isPending ? (
          <Skeleton
            variant="text"
            width={200}
            fontSize={16}
            className={styles.skeletonPrice}
          />
        ) : (
          <div>{dish?.price} USD</div>
        )}
      </div>
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
