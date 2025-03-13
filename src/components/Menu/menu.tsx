import { IDish } from "../../../types";
import { Dish } from "../Dish/dish";

export const Menu = ({ menu }: { menu: IDish[] }) => {
  return (
    <div className="menu">
      <h3>Menu</h3>
      <ul>
        {menu.map((dish) => (
          <li key={dish.id}>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
