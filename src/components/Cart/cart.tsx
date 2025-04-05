import { FC } from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/entities/cart/slice";
import classNames from "classnames";

import styles from "./cart.module.css";

interface ICartProps {
  className?: string;
}

export const Cart: FC<ICartProps> = ({ className }) => {
  const items = useSelector(selectCartItems);

  return (
    <div className={classNames(styles.root, className)}>
      <h3>Cart</h3>
      {items.length > 0 ? (
        <ul role="list">
          {items.map(({ id, amount }) => (
            <li key={id}>
              {id} - {amount}
            </li>
          ))}
        </ul>
      ) : (
        <div>Select dishes from menu</div>
      )}
    </div>
  );
};
