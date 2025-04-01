import { FC, PropsWithChildren } from "react";
import { AuthContextProvider } from "./provider";
import { useAuth } from "./use-auth";

export const AuthContext: FC<PropsWithChildren> = ({ children }) => {
  const { authorized, user, login, logout } = useAuth();

  return (
    <AuthContextProvider value={{ authorized, user, login, logout }}>
      {children}
    </AuthContextProvider>
  );
};
