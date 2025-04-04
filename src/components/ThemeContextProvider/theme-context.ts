import { createContext } from "react";

export type Theme = "light" | "dark";

interface IThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContextValue>({
  theme: "light",
  toggleTheme: () => {
    console.warn("Can not toggle theme");
  },
});
