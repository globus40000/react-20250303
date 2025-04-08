import { FC, use } from "react";
import { IDishNormalized } from "../../types";
import { AuthContext } from "../../components/AuthContextProvider/auth-context";
import { DishCounter } from "../../components/DishCounter/dish-counter";

import styles from "./dish-page.module.css";

interface IDishPageProps {
  dish: IDishNormalized;
}

export const DishPage: FC<IDishPageProps> = ({ dish }) => {
  const { isAuthorized } = use(AuthContext);
  const { id, name, ingredients, price } = dish;

  return (
    <div className={styles.root}>
      <h1>{name}</h1>
      <div className={styles.block}>
        <h3>Ingredients</h3>
        <ul role="list">
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className={styles.block}>
        <h3>Price</h3>
        <div>{price} USD</div>
      </div>
      {isAuthorized && <DishCounter id={id} />}
    </div>
  );
};
