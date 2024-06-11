/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars

import { useState } from "react";
import { RestaurantTabsContainer } from "../restaurant-tabs/container";
import { RestaurantContainer } from "../restaurant/container";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import { getUsers } from "../../redux/entities/user/thunks/get-users";

export const Restaurants = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  const dispatch = useDispatch();

  useEffect(() => dispatch(getRestaurants()), [dispatch]);

  useEffect(() => {
    if (!activeRestaurantId && restaurantIds?.length) {
      setActiveRestaurantId(restaurantIds[0]);
    }
  }, [activeRestaurantId, restaurantIds]);

  useEffect(() => dispatch(getUsers()), [dispatch]);

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
