import { FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { IRootState } from "../../redux/store";
import { selectDishById } from "../../redux/entities/dish/slice";
import { DishPage } from "./dish-page";

export const DishPageContainer: FC = () => {
  const { dishId } = useParams();

  const dish = useSelector<IRootState, ReturnType<typeof selectDishById>>(
    (state) => selectDishById(state, String(dishId))
  );

  if (!dish) {
    return null;
  }

  return <DishPage dish={dish} />;
};
