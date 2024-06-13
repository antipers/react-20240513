/* eslint-disable react/jsx-key */

import { UsersContainer } from "../users/container";
import styles from "./styles.module.css";


export const Review = ({ review }) => {
  const { userId } = review;  
  
  return (
    <>
      <span className={styles.root}>{review.text}</span>
      <UsersContainer id={userId} />
    </>
  );
};
