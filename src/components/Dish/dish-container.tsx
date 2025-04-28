import { FC } from "react";
import { Identifier } from "../../types";
import { useRequest } from "../../redux/hooks/use-request";
import { getDishById } from "../../redux/entities/dish/get-dish-by-id";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import {
  selectDishById,
  selectErrorMessage,
} from "../../redux/entities/dish/slice";
import { Dish } from "./dish";

interface IDishContainerProps {
  id: Identifier;
}

export const DishContainer: FC<IDishContainerProps> = ({ id }) => {
  // @ts-expect-error: Type 'unknown' is not assignable to type 'string'.
  const requestStatus = useRequest(getDishById, id);
  const dish = useSelector<IRootState, ReturnType<typeof selectDishById>>(
    (state) => selectDishById(state, String(id))
  );
  const errorMessage = useSelector(selectErrorMessage);

  return (
    <Dish
      dish={dish}
      requestStatus={requestStatus}
      errorMessage={errorMessage}
    />
  );
};
