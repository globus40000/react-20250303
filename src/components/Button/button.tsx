import { FC, MouseEventHandler, PropsWithChildren, use } from "react";
import classNames from "classnames";
import { ThemeContext } from "../ThemeContextProvider/theme-context";

import styles from "./button.module.css";

interface IButtonProps {
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  sizeViewVariant?: "default" | "big";
  className?: string;
}

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
  children,
  type,
  disabled,
  onClick,
  sizeViewVariant = "default",
  className,
}) => {
  const { theme } = use(ThemeContext);

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNames(styles.root, className, {
        [styles.default]: sizeViewVariant === "default",
        [styles.big]: sizeViewVariant === "big",
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      {children}
    </button>
  );
};
