import { useContext } from "react";
import { UserContext } from "../../contexts/user";

export const Counter = ({ value, increment, decrement, max = 5, min = 0 }) => {
  const isLoggedRender = useContext(UserContext);
  return (
    <div>
      {isLoggedRender ? (
        <>
          <button onClick={decrement} disabled={value === min}>
            -
          </button>
          <span>{value}</span>
          <button onClick={increment} disabled={value === max}>
            +
          </button>
        </>
      ) : null}
    </div>
  );
};
