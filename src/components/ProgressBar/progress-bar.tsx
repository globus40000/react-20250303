import { FC, use } from "react";
import { useScrollPercent } from "./use-scroll-percent";
import { ThemeContext } from "../ThemeContextProvider/theme-context";
import classNames from "classnames";

import styles from "./progress-bar.module.css";

export const ProgressBar: FC = () => {
  const scrollPercent = useScrollPercent();
  const { theme } = use(ThemeContext);

  return (
    <div
      className={classNames(styles.root, {
        // @ts-expect-error: Key must not be undefined.
        [styles.light]: theme === "light",
        // @ts-expect-error: Key must not be undefined.
        [styles.dark]: theme === "dark",
      })}
      style={{
        width: `${String(scrollPercent)}%`,
      }}
    />
  );
};
