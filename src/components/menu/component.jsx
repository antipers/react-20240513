/* eslint-disable react/jsx-key */
import { Dish } from "../dish/component";

export const Menu = ({ menu }) => {
  if (!menu) {
    return "В данный момент ресторан вносит изменения в меню, загляните позже";
  }
  return (
    <ul>
      {menu.map((dish) => (
        <li>{<Dish dish={dish} />}</li>
      ))}
    </ul>
  );
};
