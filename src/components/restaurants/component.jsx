/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars

import { useState } from "react";
import { RestaurantTabsContainer } from "../restaurant-tabs/container";
import { RestaurantContainer } from "../restaurant/container";

/* import { useEffect } from "react"; */
/* import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors"; */

export const Restaurants = () => {
  /* const restaurantIds = useSelector(selectRestaurantIds); */ /* Сделать с квери ??? */
  const [activeRestaurantId, setActiveRestaurantId] = useState();

  /*  useEffect(() => {
    if (!activeRestaurant && restaurantIds?.length) {
      setActiveRestaurant(restaurantIds[0]);
    }
  }, [activeRestaurant, restaurantIds]); */

  return (
    <div>
      <RestaurantTabsContainer
        onTabClick={setActiveRestaurantId}
        activeRestaurantId={activeRestaurantId}
      />
      {activeRestaurantId && <RestaurantContainer id={activeRestaurantId} />}
    </div>
  );
};
