import { FC } from "react";
import { Identifier } from "../../types";
import { useGetUsersQuery } from "../../redux/services/api";

interface IUserNameContainerProps {
  id: Identifier;
}

export const UserNameContainer: FC<IUserNameContainerProps> = ({ id }) => {
  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id: userId }) => id === userId),
    }),
  });

  if (!user) {
    return null;
  }

  return <span>{user.name}</span>;
};
