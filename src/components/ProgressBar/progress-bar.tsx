import { FC, use } from "react";
import { useScrollPercent } from "./use-scroll-percent";
import { ThemeContextProvider } from "../ThemeContext/provider";
import classNames from "classnames";

import styles from "./progress-bar.module.css";

export const ProgressBar: FC = () => {
  const scrollPercent = useScrollPercent();
  const { theme } = use(ThemeContextProvider);

  return (
    <div
      className={classNames(styles.root, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
      style={{
        width: `${String(scrollPercent)}%`,
      }}
    />
  );
};
