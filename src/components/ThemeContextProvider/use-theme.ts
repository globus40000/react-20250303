import { useCallback, useState } from "react";
import { Theme } from "./theme-context";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }, []);

  return { theme, toggleTheme };
};
