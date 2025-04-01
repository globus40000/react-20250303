import { FC } from "react";
import { Logo } from "../Logo/logo";
import { ToggleTheme } from "../ToggleTheme/toggle-theme";
import { ToggleAuth } from "../ToggleAuth/toggle-auth";

import styles from "./header.module.css";

export const Header: FC = () => {
  return (
    <div className={styles.root}>
      <Logo />
      <ToggleAuth className={styles.auth} />
      <ToggleTheme className={styles.theme} />
    </div>
  );
};
