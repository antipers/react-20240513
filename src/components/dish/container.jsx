import { useSelector } from "react-redux";
import { Dish } from "./component";
import { selectDishById } from "../../redux/entities/dish/selectors";

export const DishContainer = ({ id, ...props }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }
  return <Dish {...props} dish={dish} />;
};
