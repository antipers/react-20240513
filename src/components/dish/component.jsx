import { useCount } from "../../hooks/use-count";
import { CounterComponent } from "../counter/component";

export const Dish = ({ dish }) => {
  const {counter, increment, decrement} = useCount();

  return (
    <div>
      <span>{dish.name}</span>
      <CounterComponent value={counter} increment={increment} decrement={decrement} />
      <span>{dish.price * counter}</span>
    </div>
  );
};
