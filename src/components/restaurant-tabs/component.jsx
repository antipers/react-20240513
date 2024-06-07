/* eslint-disable react/jsx-key */

import { RestaurantTabContainer } from "../restaurant-tab/container";

export const RestaurantTabs = ({
  restaurantIds,
  onTabClick,
  activeRestaurantId,
}) => {
  return (
    <div>
      {restaurantIds.map((id) => (
        <RestaurantTabContainer
          id={id}
          onClick={() => {
            onTabClick(id);
          }}
          isActive={activeRestaurantId === id}
        />
      ))}
    </div>
  );
};
