import { FC } from "react";
import { Identifier, RequestStatus } from "../../types";
import { Notification } from "../Notification/notification";
import { RestaurantTabContainer } from "../RestaurantTab/restaurant-tab-container";
import { Skeleton } from "../Skeleton/skeleton";

interface IRestaurantsTabsProps {
  restaurantsIds: Identifier[];
  requestStatus: RequestStatus;
  errorMessage: string;
}

export const RestaurantsTabs: FC<IRestaurantsTabsProps> = ({
  restaurantsIds,
  requestStatus,
  errorMessage,
}) => {
  if (requestStatus === RequestStatus.pending) {
    return <Skeleton variant="rectangular" width={400} height={35} />;
  }

  if (requestStatus === RequestStatus.rejected) {
    return <Notification message={errorMessage} />;
  }

  return (
    <>
      {restaurantsIds.map((id) => (
        <RestaurantTabContainer key={id} id={id} />
      ))}
    </>
  );
};
