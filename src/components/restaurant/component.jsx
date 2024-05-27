import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({ restaurant }) => {
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
    <div>
      <h2>{name}</h2>
      <h3>Меню</h3>
      {/* 

      Первый  вариант реализации условного рендеринга, второй вариант реализован в компоненте Menu

       {!!menu?.length && <Menu menu={menu} />} 

      */}
      <Menu menu={menu} />
      <h3>Отзывы</h3>
      {/* {!!reviews?.length && <Reviews reviews={reviews} />} */}
      <Reviews reviews={reviews} />
    </div>
  );
};
