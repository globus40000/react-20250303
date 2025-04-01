import { FC, use } from "react";
import { Button } from "../Button/button";
import { AuthContextProvider } from "../AuthContext/provider";

import styles from "./toggle-auth.module.css";

interface IToggleAuthProps {
  className?: string;
}

export const ToggleAuth: FC<IToggleAuthProps> = ({ className }) => {
  const { authorized, user, login, logout } = use(AuthContextProvider);

  return (
    <div className={className}>
      {authorized ? (
        <div>
          {user?.name}
          <Button onClick={logout} className={styles.logout}>
            Logout
          </Button>
        </div>
      ) : (
        <Button onClick={login}>Login</Button>
      )}
    </div>
  );
};
