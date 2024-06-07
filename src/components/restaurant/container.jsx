import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";
import { Restaurant } from "./component";
/* import styles from "./styles.module.css"; */
import { useSelector } from "react-redux";

export const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
if (!restaurant) {
    return <div>No restaurant</div>
}
  return <Restaurant restaurant={restaurant} />;
};
 