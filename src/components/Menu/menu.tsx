import { FC } from "react";
import { Identifier, RequestStatus } from "../../types";
import classNames from "classnames";
import { MenuDishes } from "../MenuDishes/menu-dishes";

import styles from "./menu.module.css";

interface IMenuProps {
  dishesIds: Identifier[];
  requestStatus: RequestStatus;
  errorMessage: string;
  className?: string;
}

export const Menu: FC<IMenuProps> = ({
  dishesIds,
  requestStatus,
  errorMessage,
  className,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Menu</h3>
      <MenuDishes
        dishesIds={dishesIds}
        requestStatus={requestStatus}
        errorMessage={errorMessage}
      />
    </div>
  );
};
