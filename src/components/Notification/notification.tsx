import { FC, useState } from "react";
import { createPortal } from "react-dom";

import styles from "./notification.module.css";

interface INotificationProps {
  message: string;
}

const notifications = document.getElementById("notifications");

if (!notifications) {
  throw new Error("Notifications element not found.");
}

export const Notification: FC<INotificationProps> = ({ message }) => {
  const [isOpened, setIsOpened] = useState(true);

  if (!isOpened) {
    return null;
  }

  return createPortal(
    <div className={styles.root}>
      {message}
      <span
        className={styles.close}
        onClick={() => {
          setIsOpened(false);
        }}
      >
        &#10005;
      </span>
    </div>,
    notifications
  );
};
