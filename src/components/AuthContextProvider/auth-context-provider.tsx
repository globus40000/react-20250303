import { FC, PropsWithChildren } from "react";
import { AuthContext } from "./auth-context";
import { useAuth } from "./use-auth";

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthorized, user, login, logout } = useAuth();

  return (
    // eslint-disable-next-line react-x/no-unstable-context-value
    <AuthContext value={{ isAuthorized, user, login, logout }}>
      {children}
    </AuthContext>
  );
};
