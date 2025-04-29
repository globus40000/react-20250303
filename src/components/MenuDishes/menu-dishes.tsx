import { FC } from "react";
import { IDishNormalized } from "../../types";
import { Notification } from "../Notification/notification";
import { Skeleton } from "../Skeleton/skeleton";
import { DishLink } from "../DishLink/dish-link";

interface IMenuDishesProps {
  dishes: IDishNormalized[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export const MenuDishes: FC<IMenuDishesProps> = ({
  dishes,
  isLoading,
  isError,
  errorMessage,
}) => {
  if (isLoading) {
    return <Skeleton variant="rectangular" width={200} height={50} />;
  }

  if (isError) {
    return <Notification message={errorMessage} />;
  }

  return (
    <ul role="list">
      {dishes.map((dish) => (
        <li key={dish.id}>
          <DishLink dish={dish} />
        </li>
      ))}
    </ul>
  );
};
