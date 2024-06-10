/* eslint-disable react/jsx-key */

import { useSelector } from "react-redux";
import { Dish } from "./component";
import { selectDishCount } from "../../redux/ui/cart/selectors";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { decrement, increment } from "../../redux/ui/cart";

export const DishContainer = ({ dishId, ...props }) => {
  const dish = useSelector((state) => state.dish.entities[dishId]);

  const count = useSelector((state) => selectDishCount(state, dishId));

  const dispatch = useDispatch();

  const HandleIncrement = useCallback(
    () => dispatch(increment(dishId)),
    [dishId, dispatch]
  );
  const HandleDecrement = useCallback(
    () => dispatch(decrement(dishId)),
    [dishId, dispatch]
  );

  if (!dishId) {
    return <div>НЕТ из контейнреа</div>;
  }
  return (
    <Dish
      {...props}
      dish={dish}
      HandleIncrement={HandleIncrement}
      HandleDecrement={HandleDecrement}
      count={count}
    />
  );
};
