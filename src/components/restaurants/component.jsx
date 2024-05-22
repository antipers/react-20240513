/* eslint-disable react/jsx-key */
import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {
  if (!restaurants) {
    return <div>Данные не загружены, попробуйте перезагрузить страницу</div>
  }
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} />
      ))}
    </div>
  );
};
