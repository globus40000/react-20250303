import { useCallback, useState } from "react";
import { IUserNormalized } from "../../types";
import { user as mockUser } from "../../mocks/user";

const getIsAuthorized = (user: IUserNormalized | null) => Boolean(user);

export const useAuth = () => {
  const [user, setUser] = useState<IUserNormalized | null>(null);

  const isAuthorized = getIsAuthorized(user);

  const login = useCallback(() => {
    setUser(mockUser);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return { isAuthorized, user, login, logout };
};
