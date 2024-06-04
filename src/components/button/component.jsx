import { THEMES } from "../../contexts/theme/constants";
import { useTheme } from "../../contexts/theme/hooks";

export const Button = ({ children, onClick, disabled }) => {
  const { theme } = useTheme();
  return (
    <button
      style={{
        backgroundColor: theme === THEMES.default ? "grey" : "orangered",
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
