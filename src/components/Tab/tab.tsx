import { FC } from "react";

interface ITabProps {
  title: string;
  onClick: () => void;
  isActive: boolean;
}

export const Tab: FC<ITabProps> = ({ title, onClick, isActive }) => {
  return (
    <button type="button" disabled={isActive} onClick={onClick}>
      {title}
    </button>
  );
};
