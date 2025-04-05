import { FC } from "react";
import { Identifier } from "../../types";
import { Dish } from "./dish";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/slice";
import { IRootState } from "../../redux/store";

interface IDishContainerProps {
  id: Identifier;
}

export const DishContainer: FC<IDishContainerProps> = ({ id }) => {
  const dish = useSelector((state: IRootState) => selectDishById(state, id));

  if (!dish) {
    return null;
  }

  return <Dish dish={dish} />;
};
