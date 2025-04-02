import { createContext } from "react";
import { IUser } from "../../types";

interface IAuthContextValue {
  isAuthorized: boolean;
  user: IUser | null;
  login: () => void;
  logout: () => void;
}

export const AuthContextProvider = createContext<IAuthContextValue>({
  isAuthorized: false,
  user: null,
  login: () => {
    console.warn("Can not login");
  },
  logout: () => {
    console.warn("Can not logout");
  },
});
