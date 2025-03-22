import { FC } from "react";
import { useScrollPercent } from "./use-scroll-percent";

export const ProgressBar: FC = () => {
  const scrollPercent = useScrollPercent();

  return (
    <div
      className="progress-bar"
      style={{
        width: `${String(scrollPercent)}%`,
        backgroundColor: "limegreen",
        position: "fixed",
        height: "6px",
        left: 0,
        top: 0,
      }}
    />
  );
};
