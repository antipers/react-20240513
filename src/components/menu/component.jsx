/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import { Dish } from "../dish/component";
import styles from "./styles.module.css";

export const Menu = ({ menuIds }) => {
  const menu = useSelector((state) => state.dish.entities);

  if (!menuIds) {
    return "В данный момент ресторан вносит изменения в меню, загляните позже";
  }

  return (
    <div className={styles.root}>
      {menuIds.map((dishId) => (
        <Dish dishId={menu[dishId]} className={styles.dish} />
      ))}
    </div>
  );
};
