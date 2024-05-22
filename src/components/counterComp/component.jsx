import { useState } from "react";

export const CounterComp = ({ key }) => {
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
      <button key={key} onClick={decrement}>
        -
      </button>
      <span>{counter}</span>
      <button key={key} onClick={increment}>
        +
      </button>
    </div>
  );
};
