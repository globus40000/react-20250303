import { FC } from "react";
import { useParams } from "react-router";
import { MenuContainer } from "../../components/Menu/menu-container";

export const MenuPage: FC = () => {
  const { restaurantId } = useParams();

  return <div>{restaurantId && <MenuContainer id={restaurantId} />}</div>;
};
