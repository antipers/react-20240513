/* eslint-disable react/jsx-key */
import { Dish } from "../dish/component";
import styles from "./styles.module.css";

export const Menu = ({ menu }) => {
  if (!menu) {
    return "В данный момент ресторан вносит изменения в меню, загляните позже";
  }
  return (
    <div className={styles.root}>
      {menu.map((dish) => (
        <Dish dish={dish} className={styles.dish} />
      ))}
    </div>
  );
};
