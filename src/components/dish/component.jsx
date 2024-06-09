import { Counter } from "../counter/component";

export const Dish = ({
  dish,
  className,
  count,
  HandleDecrement,
  HandleIncrement,
}) => {
  return (
    <div className={className}>
      <span>{dish.name}</span>
      <Counter
        value={count}
        increment={HandleIncrement}
        decrement={HandleDecrement}
      />
      <span>{dish.price * count}</span>
    </div>
  );
};
