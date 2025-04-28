import { FC } from "react";
import { IRestaurantNormalized, RequestStatus } from "../../types";
import { Skeleton } from "../Skeleton/skeleton";
import { Notification } from "../Notification/notification";

interface IRestaurantNameProps {
  restaurant: IRestaurantNormalized | undefined;
  requestStatus: RequestStatus;
  errorMessage: string;
  className?: string;
}

export const RestaurantName: FC<IRestaurantNameProps> = ({
  restaurant,
  requestStatus,
  errorMessage,
  className,
}) => {
  if (requestStatus === RequestStatus.pending) {
    return (
      <Skeleton
        variant="text"
        width={200}
        fontSize={24}
        className={className}
      />
    );
  }

  if (requestStatus === RequestStatus.rejected) {
    return <Notification message={errorMessage} />;
  }

  return <h2>{restaurant?.name}</h2>;
};
