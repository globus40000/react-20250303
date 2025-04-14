import { FC } from "react";
import { IRestaurantNormalized, RequestStatus } from "../../types";
import { Tab } from "../Tab/tab";
import { Outlet } from "react-router";
import { Skeleton } from "../Skeleton/skeleton";
import { Notification } from "../Notification/notification";

import styles from "./restaurant.module.css";

interface IRestaurantProps {
  restaurant: IRestaurantNormalized | undefined;
  requestStatus: RequestStatus;
  errorMessage: string;
}

export const Restaurant: FC<IRestaurantProps> = ({
  restaurant,
  requestStatus,
  errorMessage,
}) => {
  return (
    <div className={styles.root}>
      {requestStatus === RequestStatus.pending ? (
        <Skeleton
          variant="text"
          width={200}
          fontSize={24}
          className={styles.skeleton}
        />
      ) : requestStatus === RequestStatus.rejected ? (
        <Notification message={errorMessage} />
      ) : (
        <h2>{restaurant?.name}</h2>
      )}
      <div className={styles.tabs}>
        <Tab title="Menu" to="menu" />
        <Tab title="Reviews" to="reviews" />
      </div>
      <Outlet />
    </div>
  );
};
