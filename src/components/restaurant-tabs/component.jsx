/* eslint-disable react/jsx-key */

import { Tab } from "../tab/component";
import styles from "./styles.module.css";

export const RestaurantTabs = ({ restaurants }) => {
  return (
    <div className={styles.root}>
      {restaurants.map(({ id, name }) => (
        <Tab title={name} to={`${id}`} />
      ))}
    </div>
  );
};
