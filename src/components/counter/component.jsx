export const CounterComponent = ({ value, max = 5, min = 0, onChange }) => {
  return (
    <div>
      <button onClick={() => onChange(value - 1)} disabled={value === min}>
        -
      </button>
      <span>{value}</span>
      <button onClick={() => onChange(value + 1)} disabled={value === max}>
        +
      </button>
    </div>
  );
};
