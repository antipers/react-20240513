import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";


export const SwitchThemeButton = ({ onChange }) => {
  const context = useContext(ThemeContext);

  return (
    <button onClick={onChange}>
      Switch Buttons theme to {context === "gray" ? "Day mode" : "Night mode"}
    </button>
  );
};
