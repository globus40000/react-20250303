import { FC, use } from "react";
import { NavLink } from "react-router";
import classNames from "classnames";
import { ThemeContext } from "../ThemeContextProvider/theme-context";

import styles from "./tab.module.css";

interface ITabProps {
  title: string;
  to: string;
}

export const Tab: FC<ITabProps> = ({ title, to }) => {
  const { theme } = use(ThemeContext);

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.root, {
          // @ts-expect-error: Key must not be undefined.
          [styles.active]: isActive,
          // @ts-expect-error: Key must not be undefined.
          [styles.light]: theme === "light",
          // @ts-expect-error: Key must not be undefined.
          [styles.dark]: theme === "dark",
        })
      }
    >
      {title}
    </NavLink>
  );
};
