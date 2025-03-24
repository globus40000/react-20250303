import { FC } from "react";
import { useScrollPercent } from "./use-scroll-percent";

import styles from "./progress-bar.module.css";

export const ProgressBar: FC = () => {
  const scrollPercent = useScrollPercent();

  return (
    <div
      className={styles.root}
      style={{
        width: `${String(scrollPercent)}%`,
      }}
    />
  );
};
