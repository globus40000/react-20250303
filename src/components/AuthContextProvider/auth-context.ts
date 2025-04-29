import { createContext } from "react";
import { IUserNormalized } from "../../types";

interface IAuthContextValue {
  isAuthorized: boolean;
  user: IUserNormalized | null;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContextValue>({
  isAuthorized: false,
  user: null,
  login: () => {
    console.warn("Can not login");
  },
  logout: () => {
    console.warn("Can not logout");
  },
});
