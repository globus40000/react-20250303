import { useEffect, useState } from "react";

const getScrollFraction = () => {
  const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
  const scrollTopMax = scrollHeight - clientHeight;

  return scrollTop / scrollTopMax;
};

export const useWidthPercent = () => {
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

  return widthPercent;
};
