import { Counter } from "../counter/component";

export const Dish = ({
  dish,
  className,
  HandleIncrement,
  HandleDecrement,
  count,
}) => {
  if (!dish) {
    return <div>Данные загружаются</div>;
  }
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
