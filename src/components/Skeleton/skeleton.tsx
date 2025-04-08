import { FC } from "react";
import classNames from "classnames";

import styles from "./skeleton.module.css";

type SkeletonVariant = "rectangular" | "circular" | "text";

interface ISkeletonProps {
  variant: SkeletonVariant;
  width?: number | string;
  height?: number | string;
  fontSize?: number | string;
  className?: string;
}

interface ISkeletonStyle {
  width?: number | string;
  height?: number | string;
}

export const Skeleton: FC<ISkeletonProps> = ({
  variant,
  width,
  height,
  fontSize,
  className,
}) => {
  const style: ISkeletonStyle = {};

  if (variant === "rectangular" || variant === "circular") {
    style.width = width;
    style.height = height;
  }

  if (variant === "text") {
    style.height = fontSize ?? "1rem";
  }

  return (
    <div
      className={classNames(styles.root, className, {
        [styles.circular]: variant === "circular",
      })}
      style={style}
    />
  );
};
