import { useSelector } from "react-redux";
import { Dish } from "./component";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { selectDishCount } from "../../redux/ui/cart/selectors";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { decrement, increment } from "../../redux/ui/cart";

export const DishContainer = ({ id, ...props }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  const count = useSelector((state) => selectDishCount(state, id));
  

  const dispatch = useDispatch();
  const HandleIncrement = useCallback(
    () => dispatch(increment(id)),
    [id, dispatch]
  );
  const HandleDecrement = useCallback(
    () => dispatch(decrement(id)),
    [id, dispatch]
  );
  /* const HandleClear = () => dispatch(clear(dish)); */

  if (!dish) {
    return null;
  }
  return (
    <Dish
      {...props}
      dish={dish}
      count={count}
      HandleDecrement={HandleDecrement}
      HandleIncrement={HandleIncrement}
    />
  );
};
