import { CounterComponent } from "../counter/component";
import { useState } from "react";
const initialValue = 0;

export const Dish = ({ dish }) => {
  const [counter, setCounter] = useState(initialValue);

  return (
    <div>
      <span>{dish.name}</span>
      <CounterComponent value={counter} onChange={setCounter} />
      <span>{dish.price * counter}</span>
    </div>
  );
};
