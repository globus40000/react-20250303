import { FC } from "react";
import { IDish } from "../../types";
import { Dish } from "../Dish/dish";

interface IMenuProps {
  menu: IDish[];
}

export const Menu: FC<IMenuProps> = ({ menu }) => {
  return (
    <div className="menu">
      <h3>Menu</h3>
      <ul>
        {menu.map((dish) => (
          <li key={dish.id}>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
