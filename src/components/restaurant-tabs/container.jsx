/* eslint-disable react/jsx-key */

import { useSelector } from "react-redux";
import { RestaurantTabs } from "./component";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";

export const RestaurantTabsContainer = ({ onTabClick, activeRestaurantId }) => {
  const restaurantIds = useSelector((state) => selectRestaurantIds(state));

  if(!restaurantIds) return <div>Рестораны не загружены</div>
  return (
    <RestaurantTabs
      restaurantIds={restaurantIds}
      onTabClick={onTabClick}
      activeRestaurantId={activeRestaurantId}
    />
  );
};
