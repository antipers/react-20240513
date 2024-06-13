/* eslint-disable react/jsx-key */
import styles from "./styles.module.css";
import { DishContainer } from "../dish/container";

export const Menu = ({ restaurantId, dishIds }) => {
  if (!restaurantId) {
    return "В данный момент ресторан вносит изменения в меню, загляните позже";
  }

  return (
    <>
      {dishIds.map((dishId) => (
        <div className={styles.root}>
          <DishContainer
            dishId={dishId}
            className={styles.dish}
            restaurantId={restaurantId}
          />
        </div>
      ))}
    </>
  );
};
