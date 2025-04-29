import { FC } from "react";
import classNames from "classnames";
import { CartItem } from "../CartItem/cart-item";
import { IDishNormalized } from "../../types";

import styles from "./cart.module.css";

interface ICartProps {
  dishes: IDishNormalized[];
  className?: string;
}

export const Cart: FC<ICartProps> = ({ dishes, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Cart</h3>
      {dishes.length > 0 ? (
        <ul role="list">
          {dishes.map((dish) => (
            <li key={dish.id}>
              <CartItem dish={dish} />
            </li>
          ))}
        </ul>
      ) : (
        <div>Select dishes from menu</div>
      )}
    </div>
  );
};
