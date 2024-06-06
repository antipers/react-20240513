import { Menu } from "../menu/component";
import { NewReviewForm } from "../new-review-form/component";
import { Reviews } from "../reviews/component";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector(
    (state) => state.restaurant.entities[restaurantId]
  );

  if (!restaurant) {
    return <div>Данные не загружены, попробуйте перезагрузить страницу</div>;
  }

  const { name, menu, reviews } = restaurant;

  if (!name) {
    return (
      <div>
        <h2>Ресторан отсутствует</h2>
      </div>
    );
  }
  return (
    <div className={styles.root}>
      <h2>{name}</h2>
      <h3>Меню</h3>
      {/* 

      Первый  вариант реализации условного рендеринга, второй вариант реализован в компоненте Menu

       {!!menu?.length && <Menu menu={menu} />} 

      */}
      <Menu menuIds={menu} />
      <h3>Отзывы</h3>
      {/* {!!reviews?.length && <Reviews reviews={reviews} />} */}
      <Reviews reviewsIds={reviews} />

      <h3>Оставить новый отзыв</h3>
      <NewReviewForm />
    </div>
  );
};
