import { FC } from "react";
import { Skeleton } from "../Skeleton/skeleton";
import { IDishNormalized, RequestStatus } from "../../types";

import styles from "./dish-name.module.css";

interface IDishNameProps {
  dish: IDishNormalized | undefined;
  requestStatus: RequestStatus;
  className?: string;
}

export const DishName: FC<IDishNameProps> = ({
  dish,
  requestStatus,
  className,
}) => {
  return (
    <div className={className}>
      {requestStatus === RequestStatus.pending ? (
        <div className={styles.skeleton}>
          <Skeleton variant="text" width={200} fontSize={24} />
        </div>
      ) : (
        <h1>{dish?.name}</h1>
      )}
    </div>
  );
};
