export const Tab = ({ title, onClick, isActive }) => {
  if (!title) {
    return <button>Ресторан недоступен</button>;
  }
  return (
    <button onClick={onClick} disabled={isActive}>
      {" "}
      {title}{" "}
    </button>
  );
};
