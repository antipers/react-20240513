/* eslint-disable react/jsx-key */
import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id";
import { useSelector } from "react-redux";
import { selectRestaurantDishesIds } from "../../redux/entities/restaurant/selectors";
import { Menu } from "./component";
/* import { useRequest } from "../../hooks/use-request"; */
import { useMemo } from "react";
import { REQUEST_STATUS } from "../../redux/ui/request/constants";
import { useLazyRequest } from "../../hooks/use-lazy-request";
import { useEffect } from "react";
import { useCallback } from "react";

export const MenuContainer = ({ restaurantId }) => {
  const dishIds = useSelector((state) =>
    selectRestaurantDishesIds(state, restaurantId)
  );

  const params = useMemo(() => ({ restaurantId }), [restaurantId]);
  /* const requestStatus = useRequest(getDishesByRestaurantId, params); */

  const [fetchDishesStatus, fetchDishes] = useLazyRequest(
    getDishesByRestaurantId,
    params
  );

  const handleRefreshClick = useCallback(
    (forceRefetch = true) => fetchDishes({ restaurantId, forceRefetch }),
    [fetchDishes, restaurantId]
  );

  useEffect(() => {
    handleRefreshClick(false);
  }, [handleRefreshClick]);

  if (fetchDishesStatus === REQUEST_STATUS.pending) {
    return "Loading...";
  }

  return (
    <Menu
      dishIds={dishIds}
      restaurantId={restaurantId}
      onRefreshClick={handleRefreshClick}
    />
  );
};
