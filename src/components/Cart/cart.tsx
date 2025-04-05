import { FC } from "react";
import { ICartItem } from "../../redux/entities/cart/slice";
import classNames from "classnames";
import { DishContainer } from "../Dish/dish-container";

import styles from "./cart.module.css";

interface ICartProps {
  items: ICartItem[];
  className?: string;
}

export const Cart: FC<ICartProps> = ({ items, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Cart</h3>
      {items.length > 0 ? (
        <ul role="list">
          {items.map(({ id }) => (
            <li key={id}>
              <DishContainer id={id} />
            </li>
          ))}
        </ul>
      ) : (
        <div>Select dishes from menu</div>
      )}
    </div>
  );
};
