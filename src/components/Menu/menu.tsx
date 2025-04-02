import { FC } from "react";
import { IDish } from "../../types";
import { Dish } from "../Dish/dish";
import classNames from "classnames";

import styles from "./menu.module.css";

interface IMenuProps {
  menu: IDish[];
  className?: string;
}

export const Menu: FC<IMenuProps> = ({ menu, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Menu</h3>
      <ul role="list">
        {menu.map((dish) => (
          <li key={dish.id}>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
