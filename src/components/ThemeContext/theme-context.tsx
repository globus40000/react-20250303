import { FC, PropsWithChildren } from "react";
import { ThemeContextProvider } from "./provider";
import { useTheme } from "./use-theme";

export const ThemeContext: FC<PropsWithChildren> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeContextProvider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContextProvider>
  );
};
