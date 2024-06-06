/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import { RestaurantTabs } from "../restaurant-tabs/component";
import { Restaurant } from "../restaurant/component";
import { useState } from "react";

export const Restaurants = ({ restaurantIds }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    "a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2"
  );

  if (!restaurantIds) {
    return <div>Данные не загружены, попробуйте перезагрузить страницу</div>;
  }
  return (
    <div>
      <RestaurantTabs
        restaurantIds={restaurantIds}
        onTabClick={setActiveRestaurantId}
        activeTabId={activeRestaurantId}
      />
      <Restaurant restaurantId={activeRestaurantId} />
    </div>
  );
};
