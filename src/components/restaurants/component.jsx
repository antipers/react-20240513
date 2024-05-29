/* eslint-disable react/jsx-key */
import { RestaurantTabs } from "../restaurant-tabs/component";
import { Restaurant } from "../restaurant/component";
import { useState } from "react";

export const Restaurants = ({ restaurants }) => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
  const activeRestaurant = restaurants[activeRestaurantIndex];

  if (!restaurants) {
    return <div>Данные не загружены, попробуйте перезагрузить страницу</div>;
  }
  return (
    <div>
      <RestaurantTabs
        restaurants={restaurants}
        onTabClick={setActiveRestaurantIndex}
        activeTabIndex={activeRestaurantIndex}
      />

      <Restaurant restaurant={activeRestaurant} />
      <Restaurant restaurant={activeRestaurant} />
      <Restaurant restaurant={activeRestaurant} />
      <Restaurant restaurant={activeRestaurant} />
      <Restaurant restaurant={activeRestaurant} />
      <Restaurant restaurant={activeRestaurant} />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};
