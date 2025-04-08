import { FC } from "react";
import { Link } from "react-router";
import { IDishNormalized } from "../../types";

interface IDishLinkProps {
  dish: IDishNormalized;
}

export const DishLink: FC<IDishLinkProps> = ({ dish }) => {
  const { id, name } = dish;

  return <Link to={`/dish/${id}`}>{name}</Link>;
};
