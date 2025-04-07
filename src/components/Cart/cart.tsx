import { FC } from "react";
import classNames from "classnames";
import { CartItemContainer } from "../CartItem/cart-item-container";
import { Identifier } from "../../types";

import styles from "./cart.module.css";

interface ICartProps {
  dishesIds: Identifier[];
  className?: string;
}

export const Cart: FC<ICartProps> = ({ dishesIds, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Cart</h3>
      {dishesIds.length > 0 ? (
        <ul role="list">
          {dishesIds.map((id) => (
            <li key={id}>
              <CartItemContainer id={id} />
            </li>
          ))}
        </ul>
      ) : (
        <div>Select dishes from menu</div>
      )}
    </div>
  );
};
