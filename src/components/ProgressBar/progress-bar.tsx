import { FC, useEffect, useState } from "react";

const getScrollFraction = () => {
  const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
  const scrollTopMax = scrollHeight - clientHeight;

  return scrollTop / scrollTopMax;
};

export const ProgressBar: FC = () => {
  const [widthPercent, setWidthPercent] = useState(getScrollFraction() * 100);

  useEffect(() => {
    const handleScroll = () => {
      setWidthPercent(getScrollFraction() * 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
