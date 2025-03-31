import { FC, MouseEventHandler, PropsWithChildren } from "react";
import classNames from "classnames";

import styles from "./button.module.css";

interface IButtonProps {
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
  children,
  type,
  disabled,
  onClick,
  className,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNames(styles.root, className)}
    >
      {children}
    </button>
  );
};
