import { Button } from "../button/component";

export const Tab = ({ title, onClick, isActive }) => {
  if (!title) {
    return <button>Ресторан недоступен</button>;
  }
  return (
    <Button onClick={onClick} disabled={isActive}>
      {" "}
      {title}{" "}
    </Button>
  );
};
