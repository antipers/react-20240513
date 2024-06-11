/* eslint-disable react/jsx-key */

import { useDispatch } from "react-redux";
import { UsersContainer } from "../users/container";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/user/selectors";
import { useEffect } from "react";
import { getUsers } from "../../redux/entities/user/thunks/get-users";

export const Review = ({ review }) => {
  const { userId } = review;

  
  return (
    <>
      <span className={styles.root}>{review.text}</span>;
      <UsersContainer id={userId} />
    </>
  );
};
