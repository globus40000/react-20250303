import { FC } from "react";
import { Button } from "../Button/button";

import styles from "./tab.module.css";

interface ITabProps {
  title: string;
  onClick: () => void;
  isActive: boolean;
}

export const Tab: FC<ITabProps> = ({ title, onClick, isActive }) => {
  return (
    <Button
      type="button"
      disabled={isActive}
      onClick={onClick}
      className={styles.root}
      sizeViewVariant="big"
    >
      {title}
    </Button>
  );
};
