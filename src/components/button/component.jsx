import { THEMES } from "../../contexts/theme/constants";
import { useTheme } from "../../contexts/theme/hooks";
import styles from "./styles.module.css";
import classNames from "classnames";
export const Button = ({ children, onClick, disabled, type = "primary" }) => {
  const { theme } = useTheme();
  return (
    <button
      className={classNames(styles.root, styles[type], {
        [styles.disabled]: disabled,
        [styles.default]: theme === THEMES.default,
        [styles.alternative]: theme === THEMES.alternative,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
