/* eslint-disable react/jsx-key */

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id";
import { useSelector } from "react-redux";
import { selectRestaurantDishesIds } from "../../redux/entities/restaurant/selectors";
import { Menu } from "./component";

export const MenuContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const dishIds = useSelector((state) =>
    selectRestaurantDishesIds(state, restaurantId)
  );

  useEffect(() => {
    dispatch(getDishesByRestaurantId({restaurantId}));
  }, [dispatch, restaurantId]);

  if (!restaurantId) {
    return "В данный момент ресторан вносит изменения в меню, загляните позже";
  }

  return <Menu dishIds={dishIds} restaurantId={restaurantId} />;
};
