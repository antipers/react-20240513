import { useSelector } from "react-redux";
import styles from "./styles.module.css";

export const Users = ({ usersIds }) => {
  const users = useSelector((state) => state.user.entities);

  return (
    <div className={styles.root}>
      <span>{users[usersIds].name}</span>
    </div>
  );
};
