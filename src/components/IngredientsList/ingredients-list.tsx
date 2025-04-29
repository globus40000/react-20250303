import { FC } from "react";

interface IIngredientsListProps {
  ingredients: string[];
}

export const IngredientsList: FC<IIngredientsListProps> = ({ ingredients }) => {
  if (ingredients.length === 0) {
    return null;
  }

  return (
    <ul role="list">
      {ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
      ))}
    </ul>
  );
};
