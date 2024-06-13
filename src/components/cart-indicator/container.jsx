import { useSelector } from "react-redux";
import { selectCartCount } from "../../redux/ui/cart/selectors";
import { CartIndicator } from "./component";
import { useDispatch } from "react-redux";
import { clear } from "../../redux/ui/cart";
import { useCallback } from "react";

export const CartIndicatorContainer = () => {
  const count = useSelector(selectCartCount);
  const dispatch = useDispatch();
  const HandleClearClick = useCallback(() => dispatch(clear()), [dispatch]);

  return <CartIndicator count={count} onClearClick={HandleClearClick} />;
};
