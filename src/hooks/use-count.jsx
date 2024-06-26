import { useCallback } from "react";
import { useState } from "react";

export const useCount = ({ initialValue = 0, max = 5, min = 0 } = {}) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = useCallback(() => {
    setCounter((currentCount) =>
      currentCount === max ? currentCount : currentCount + 1
    );
  }, [max]);

  const decrement = useCallback(() => {
    setCounter((currentCount) =>
      currentCount === min ? currentCount : currentCount - 1
    );
  }, [min]);

  const set = useCallback(
    (value) => {
      setCounter(Math.max(Math.min(value, max), min));
    },
    [min, max]
  );

  return { counter, increment, decrement, set };
};
