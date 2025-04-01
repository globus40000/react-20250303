import { createContext } from "react";
import { IUser } from "../../types";

interface IAuthContextValue {
  authorized: boolean;
  user: IUser | null;
  login: () => void;
  logout: () => void;
}

export const AuthContextProvider = createContext<IAuthContextValue>({
  authorized: false,
  user: null,
  login: () => {
    console.warn("Can not login");
  },
  logout: () => {
    console.warn("Can not logout");
  },
});
