import { FC, use } from "react";
import { Button } from "../Button/button";
import { ThemeContext } from "../ThemeContextProvider/theme-context";

interface IToggleThemeProps {
  className?: string;
}

export const ToggleTheme: FC<IToggleThemeProps> = ({ className }) => {
  const { toggleTheme } = use(ThemeContext);

  return (
    <Button className={className} onClick={toggleTheme}>
      Toggle theme
    </Button>
  );
};
