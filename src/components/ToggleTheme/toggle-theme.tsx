import { FC, use } from "react";
import { Button } from "../Button/button";
import { ThemeContextProvider } from "../ThemeContext/provider";

interface IToggleThemeProps {
  className?: string;
}

export const ToggleTheme: FC<IToggleThemeProps> = ({ className }) => {
  const { toggleTheme } = use(ThemeContextProvider);

  return (
    <Button className={className} onClick={toggleTheme}>
      Toggle theme
    </Button>
  );
};
