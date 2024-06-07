import { useCount } from "../../hooks/use-count";
import { Counter } from "../counter/component";

export const Dish = ({ dish, className }) => {
  const { counter, increment, decrement } = useCount();

  return (
    <div className={className}>
      <span>{dish.name}</span>
      <Counter value={counter} increment={increment} decrement={decrement} />
      <span>{dish.price * counter}</span>
    </div>
  );
};
