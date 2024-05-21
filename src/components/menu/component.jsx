/* eslint-disable react/jsx-key */
import { CounterComp } from "../counterComp/component";
import { Dish } from "../dish/component";

export const Menu = ({ menu }) => {
  return (
    <ul>
      {menu.map((m) => (
        <li>
          {<Dish dish={m.name} />}
          <CounterComp />
        </li>
      ))}
    </ul>
  );
};
