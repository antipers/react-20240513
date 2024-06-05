import classNames from "classnames";
import { AuthorizationButton } from "../authorization-button/component";
import { ProgressBar } from "../progress-bar/component";
import { ThemeToggler } from "../theme-toggler/component";

import styles from "./styles.module.css";

export const Header = ({ header }) => {
  return (
    <header className={classNames(styles.root, styles.heavy)}>
      <ProgressBar />
      <ThemeToggler />
      <AuthorizationButton />
      {header}
    </header>
  );
};
