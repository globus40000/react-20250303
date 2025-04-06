import { FC } from "react";
import { Identifier } from "../../types";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import { IRootState } from "../../redux/store";
import { Tab } from "../Tab/tab";

interface IRestaurantTabContainerProps {
  id: Identifier;
  isActive: boolean;
  onClick: () => void;
}

export const RestaurantTabContainer: FC<IRestaurantTabContainerProps> = ({
  id,
  isActive,
  onClick,
}) => {
  const restaurant = useSelector<
    IRootState,
    ReturnType<typeof selectRestaurantById>
  >((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;

  return <Tab key={id} title={name} isActive={isActive} onClick={onClick} />;
};
