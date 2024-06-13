/* eslint-disable react/jsx-key */

import { RestaurantTabs } from "./component";
import {  useGetRestaurantsQuery } from "../../redux/service/api/api";

export const RestaurantTabsContainer = ({ onTabClick, activeRestaurantId }) => {
  // eslint-disable-next-line no-unused-vars
  const { data: restaurants, isLoading, isFetching } = useGetRestaurantsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (!restaurants) return <div>Рестораны не загружены</div>;
  
  return (
    <RestaurantTabs
      restaurants={restaurants}
      onTabClick={onTabClick}
      activeRestaurantId={activeRestaurantId}
    />
  );
};