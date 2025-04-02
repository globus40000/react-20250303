import { FC, PropsWithChildren } from "react";
import { AuthContextProvider } from "./provider";
import { useAuth } from "./use-auth";

export const AuthContext: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthorized, user, login, logout } = useAuth();

  return (
    <AuthContextProvider value={{ isAuthorized, user, login, logout }}>
      {children}
    </AuthContextProvider>
  );
};
