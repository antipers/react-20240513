export const CounterComponent = ({
  value,
  increment,
  decrement,
  max = 5,
  min = 0,
}) => {
  return (
    <div>
      <button onClick={decrement} disabled={value === min}>
        -
      </button>
      <span>{value}</span>
      <button onClick={increment} disabled={value === max}>
        +
      </button>
    </div>
  );
};
