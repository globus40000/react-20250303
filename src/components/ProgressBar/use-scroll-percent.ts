import { useEffect, useState } from "react";

const calculateScrollPercent = () => {
  const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
  const scrollTopMax = scrollHeight - clientHeight;

  return (scrollTop / scrollTopMax) * 100;
};

export const useScrollPercent = () => {
  const [scrollPercent, setScrollPercent] = useState(calculateScrollPercent());

  useEffect(() => {
    const handleScroll = () => {
      setScrollPercent(calculateScrollPercent());
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPercent;
};
