import { FC, PropsWithChildren } from "react";
import { ThemeContext } from "./theme-context";
import { useTheme } from "./use-theme";

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  // eslint-disable-next-line react-x/no-unstable-context-value
  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
