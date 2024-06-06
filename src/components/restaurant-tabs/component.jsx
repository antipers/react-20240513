/* eslint-disable react/jsx-key */

import { useSelector } from "react-redux";
import { Tab } from "../tab/component";

export const RestaurantTabs = ({
  restaurantIds,
  onTabClick,
  activeTabId,  
}) => {
  const restaurant = useSelector((state) => state.restaurant.entities);
  return (
    <div>
      {restaurantIds.map((id) => (
        <Tab
          title={restaurant[id].name}
          onClick={() => {
            onTabClick(id);
          }}
          isActive={activeTabId === id}
        />
      ))}
    </div>
  );
};
