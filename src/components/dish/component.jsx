import { useCount } from "../../hooks/use-count";
import { Counter } from "../counter/component";

export const Dish = ({ dishId, className }) => {
  const { counter, increment, decrement } = useCount();

  return (
    <div className={className}>
      <span>{dishId.name}</span>
      <Counter value={counter} increment={increment} decrement={decrement} />
      <span>{dishId.price * counter}</span>
    </div>
  );
};
