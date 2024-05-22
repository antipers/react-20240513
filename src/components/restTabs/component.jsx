import { RestTab } from "../restTab/component";

export const RestTabs = ({ tabs, onClick }) => {
  return (
    <div>
      {tabs.map((r) => (
        <RestTab key={r.id} tab={r.name} onClick={onClick} />
      ))}
    </div>
  );
};
