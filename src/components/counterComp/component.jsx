import { useState } from "react";

export const CounterComp = () => {
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const increment = () => {
    if (counter < 5) {
      setCounter(counter + 1);
    }
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};
