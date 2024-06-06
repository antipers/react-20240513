import styles from "./styles.module.css";

export const Review = ({ reviewText }) => {
  return <span className={styles.root}>{reviewText}</span>;
};
