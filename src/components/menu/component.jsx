/* eslint-disable react/jsx-key */

import styles from "./styles.module.css";
import { DishContainer } from "../dish/container";

export const Menu = ({ dishIds }) => {
  if (!dishIds) {
    return "В данный момент ресторан вносит изменения в меню, загляните позже";
  }

  return (
    <div className={styles.root}>
      {dishIds.map((id) => (
        <DishContainer id={id} className={styles.dish} />
      ))}
    </div>
  );
};
