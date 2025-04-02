import { useState } from "react";
import { IUser } from "../../types";
import { user as mockUser } from "../../mocks/user";

const getIsAuthorized = (user: IUser | null) => Boolean(user);

export const useAuth = () => {
  const [user, setUser] = useState<IUser | null>(null);

  const isAuthorized = getIsAuthorized(user);

  const login = () => {
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  return { isAuthorized, user, login, logout };
};
