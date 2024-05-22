export const RestTab = ({ tab, onClick, key }) => {
  if (!tab) {
    return <button>Ресторан недоступен</button>;
  }
  return (
    <button key={key} onClick={onClick}>
      {tab}
    </button>
  );
};
