/* eslint-disable react/jsx-key */
import styles from "./styles.module.css";
import { DishContainer } from "../dish/container";
import { Button } from "../button/component";

export const Menu = ({ restaurantId, dishIds, onRefreshClick }) => {
  if (!restaurantId) {
    return "В данный момент ресторан вносит изменения в меню, загляните позже";
  }

  return (
    <>
      <Button onClick={onRefreshClick}>Refresh</Button>
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
