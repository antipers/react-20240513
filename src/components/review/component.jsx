import { UsersContainer } from "../users/container";
import styles from "./styles.module.css";

export const Review = ({ review }) => {
  return (
    <>
      <span className={styles.root}>{review.text}</span>;
      <UsersContainer id={review.userId} />
    </>
  );
};
