import { FC } from "react";
import { NavLink } from "react-router";
import classNames from "classnames";

import styles from "./tab.module.css";

interface ITabProps {
  title: string;
  to: string;
}

export const Tab: FC<ITabProps> = ({ title, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.root, { [styles.active]: isActive })
      }
    >
      {title}
    </NavLink>
  );
};
