import { FC } from "react";
import { Skeleton } from "../Skeleton/skeleton";
import { IDishNormalized } from "../../types";

import styles from "./dish-name.module.css";

interface IDishNameProps {
  dish: IDishNormalized | undefined;
  isLoading: boolean;
  className?: string;
}

export const DishName: FC<IDishNameProps> = ({
  dish,
  isLoading,
  className,
}) => {
  return (
    <div className={className}>
      {isLoading ? (
        <div className={styles.skeleton}>
          <Skeleton variant="text" width={200} fontSize={24} />
        </div>
      ) : (
        <h1>{dish?.name}</h1>
      )}
    </div>
  );
};
