import { FC } from "react";
import { useParams } from "react-router";
import { DishContainer } from "../../components/Dish/dish-container";

export const DishPage: FC = () => {
  const { dishId } = useParams();

  return <div>{dishId && <DishContainer id={dishId} />}</div>;
};
