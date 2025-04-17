import { FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { IRootState } from "../../redux/store";
import {
  selectDishById,
  selectErrorMessage,
} from "../../redux/entities/dish/slice";
import { DishPage } from "./dish-page";
import { useRequest } from "../../redux/hooks/use-request";
import { getDishById } from "../../redux/entities/dish/get-dish-by-id";

export const DishPageContainer: FC = () => {
  const { dishId } = useParams();

  // @ts-expect-error: Type 'unknown' is not assignable to type 'string'.
  const requestStatus = useRequest(getDishById, dishId);
  const dish = useSelector<IRootState, ReturnType<typeof selectDishById>>(
    (state) => selectDishById(state, String(dishId))
  );
  const errorMessage = useSelector(selectErrorMessage);

  return (
    <DishPage
      dish={dish}
      requestStatus={requestStatus}
      errorMessage={errorMessage}
    />
  );
};
