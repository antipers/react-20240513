/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import { useProgressBar } from "../../hooks/use-scroll";
import { RestaurantTabs } from "../restaurant-tabs/component";
import { Restaurant } from "../restaurant/component";
import { useState } from "react";


import { useRef } from "react";


export const Restaurants = ({ restaurants }) => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
  const activeRestaurant = restaurants[activeRestaurantIndex];

  const ref = useRef(null);
  /* const width = useProgressBar(ref);
  console.log(width); */

  if (!restaurants) {
    return <div>Данные не загружены, попробуйте перезагрузить страницу</div>;
  }
  return (
    <div ref={ref} style={{ overflowY: "scroll", maxHeight: "100vh" }}>
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
