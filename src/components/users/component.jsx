import styles from "./styles.module.css";

export const Users = ({ users }) => {
/* Без этой проверки все крашится. Пользователи не успевают прийти с сервера */
  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.root}>
      <span>{users.name}</span>
    </div>
  );
};
