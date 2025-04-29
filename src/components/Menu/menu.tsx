import { FC } from "react";
import { IDishNormalized } from "../../types";
import classNames from "classnames";
import { MenuDishes } from "../MenuDishes/menu-dishes";

import styles from "./menu.module.css";

interface IMenuProps {
  dishes: IDishNormalized[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  className?: string;
}

export const Menu: FC<IMenuProps> = ({
  dishes,
  isLoading,
  isError,
  errorMessage,
  className,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Menu</h3>
      <MenuDishes
        dishes={dishes}
        isLoading={isLoading}
        isError={isError}
        errorMessage={errorMessage}
      />
    </div>
  );
};
