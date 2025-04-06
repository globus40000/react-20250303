import { FC } from "react";
import { Identifier } from "../../types";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import { selectUserById } from "../../redux/entities/user/slice";

interface IUserNameContainerProps {
  id: Identifier;
}

export const UserNameContainer: FC<IUserNameContainerProps> = ({ id }) => {
  const user = useSelector<IRootState, ReturnType<typeof selectUserById>>(
    (state) => selectUserById(state, id)
  );

  if (!user) {
    return null;
  }

  return <span>{user.name}</span>;
};
