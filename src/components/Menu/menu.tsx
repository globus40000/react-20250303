import { FC } from "react";
import { Identifier } from "../../types";
import classNames from "classnames";
import { DishContainer } from "../Dish/dish-container";

import styles from "./menu.module.css";

interface IMenuProps {
  dishesIds: Identifier[];
  className?: string;
}

export const Menu: FC<IMenuProps> = ({ dishesIds, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Menu</h3>
      <ul role="list">
        {dishesIds.map((id) => (
          <li key={id}>
            <DishContainer id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
