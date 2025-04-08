import { FC } from "react";
import { Identifier } from "../../types";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import { Menu } from "./menu";

interface IMenuContainerProps {
  id: Identifier;
}

export const MenuContainer: FC<IMenuContainerProps> = ({ id }) => {
  const restaurant = useSelector<
    IRootState,
    ReturnType<typeof selectRestaurantById>
  >((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  const { menu } = restaurant;

  return <Menu dishesIds={menu} />;
};
