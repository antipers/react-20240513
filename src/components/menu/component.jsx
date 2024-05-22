/* eslint-disable react/jsx-key */
import { CounterComp } from "../counterComp/component";
import { Dish } from "../dish/component";

export const Menu = ({ menu }) => {
  if (!menu) {
    return "В данный момент ресторан вносит изменения в меню, загляните позже";
  }
  return (
    <ul>
      {menu.map((m) => (
        <li>
          {<Dish dish={m.name} />}
          <CounterComp key={m.id} />
        </li>
      ))}
    </ul>
  );
};
