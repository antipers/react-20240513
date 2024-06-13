import { Menu } from "../menu/component";
import { NewReviewForm } from "../new-review-form/component";
import { Reviews } from "../reviews/component";
import styles from "./styles.module.css";

export const Restaurant = ({ restaurant }) => {
  const { name } = restaurant;
  
  
  return (
    <div className={styles.root}>
      <h2>{name}</h2>
      <h3>Меню</h3>
      <Menu restaurantId={restaurant.id} />
      <h3>Отзывы</h3>

      <Reviews restaurantId={restaurant.id} />

      <h3>Оставить новый отзыв</h3>
      <NewReviewForm />
    </div>
  );
};
