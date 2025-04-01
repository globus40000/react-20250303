import { FC } from "react";
import { Logo } from "../Logo/logo";
import { ToggleTheme } from "../ToggleTheme/toggle-theme";

import styles from "./header.module.css";

export const Header: FC = () => {
  return (
    <div className={styles.root}>
      <Logo />
      <ToggleTheme className={styles.theme} />
    </div>
  );
};
