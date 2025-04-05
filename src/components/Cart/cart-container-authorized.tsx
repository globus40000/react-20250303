import { FC, use } from "react";
import { CartContainer } from "./cart-container";
import { AuthContext } from "../AuthContextProvider/auth-context";

interface ICartContainerAuthorizedProps {
  className?: string;
}

export const CartContainerAuthorized: FC<ICartContainerAuthorizedProps> = ({
  className,
}) => {
  const { isAuthorized } = use(AuthContext);

  if (!isAuthorized) {
    return null;
  }

  return <CartContainer className={className} />;
};
