import { FC } from "react";
import { useWidthPercent } from "./use-width-percent";

export const ProgressBar: FC = () => {
  const widthPercent = useWidthPercent();

  return (
    <div
      className="progress-bar"
      style={{
        width: `${String(widthPercent)}%`,
        backgroundColor: "limegreen",
        position: "fixed",
        height: "6px",
        left: 0,
        top: 0,
      }}
    />
  );
};
