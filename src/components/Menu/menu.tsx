import { FC } from "react";
import { Identifier, RequestStatus } from "../../types";
import classNames from "classnames";
import { DishLinkContainer } from "../DishLink/dish-link-container";
import { Skeleton } from "../Skeleton/skeleton";
import { Notification } from "../Notification/notification";

import styles from "./menu.module.css";

interface IMenuProps {
  dishesIds: Identifier[];
  requestStatus: RequestStatus;
  errorMessage: string;
  className?: string;
}

export const Menu: FC<IMenuProps> = ({
  dishesIds,
  requestStatus,
  errorMessage,
  className,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Menu</h3>
      {requestStatus === RequestStatus.pending ? (
        <Skeleton variant="rectangular" width={200} height={50} />
      ) : requestStatus === RequestStatus.rejected ? (
        <Notification message={errorMessage} />
      ) : (
        <ul role="list">
          {dishesIds.map((id) => (
            <li key={id}>
              <DishLinkContainer id={id} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
