import { FC, use } from "react";
import { Button } from "../Button/button";
import { AuthContext } from "../AuthContextProvider/auth-context";

import styles from "./toggle-auth.module.css";

interface IToggleAuthProps {
  className?: string;
}

export const ToggleAuth: FC<IToggleAuthProps> = ({ className }) => {
  const { isAuthorized, user, login, logout } = use(AuthContext);

  return (
    <div className={className}>
      {isAuthorized ? (
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
