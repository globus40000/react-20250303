import { FC } from "react";
import { Identifier } from "../../types";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import { selectDishById } from "../../redux/entities/dish/slice";
import { DishLink } from "./dish-link";

interface IDishLinkContainerProps {
  id: Identifier;
}

export const DishLinkContainer: FC<IDishLinkContainerProps> = ({ id }) => {
  const dish = useSelector<IRootState, ReturnType<typeof selectDishById>>(
    (state) => selectDishById(state, id)
  );

  if (!dish) {
    return null;
  }

  return <DishLink dish={dish} />;
};
