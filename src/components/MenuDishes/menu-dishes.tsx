import { FC } from "react";
import { Identifier, RequestStatus } from "../../types";
import { DishLinkContainer } from "../DishLink/dish-link-container";
import { Notification } from "../Notification/notification";
import { Skeleton } from "../Skeleton/skeleton";

interface IMenuDishesProps {
  dishesIds: Identifier[];
  requestStatus: RequestStatus;
  errorMessage: string;
}

export const MenuDishes: FC<IMenuDishesProps> = ({
  dishesIds,
  requestStatus,
  errorMessage,
}) => {
  if (requestStatus === RequestStatus.pending) {
    return <Skeleton variant="rectangular" width={200} height={50} />;
  }

  if (requestStatus === RequestStatus.rejected) {
    return <Notification message={errorMessage} />;
  }

  return (
    <ul role="list">
      {dishesIds.map((id) => (
        <li key={id}>
          <DishLinkContainer id={id} />
        </li>
      ))}
    </ul>
  );
};
