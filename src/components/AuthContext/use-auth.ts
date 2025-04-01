import { useState } from "react";
import { IUser } from "../../types";
import { user as mockUser } from "../../mocks/user";

const isAuthorized = (user: IUser | null) => Boolean(user);

export const useAuth = () => {
  const [user, setUser] = useState<IUser | null>(null);

  const authorized = isAuthorized(user);

  const login = () => {
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  return { authorized, user, login, logout };
};
