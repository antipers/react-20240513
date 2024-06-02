import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { useEffect } from "react";


export const SwitchThemeButton = ({ onChange }) => {
  const context = useContext(ThemeContext);

  useEffect(() => {
    const targetToSwitch = document.querySelectorAll("button");

    targetToSwitch.forEach(
      (target) => (target.style.backgroundColor = context)
    );
  }, [context]);
  let title;
  context === "gray" ? (title = "Day mode") : (title = "Night mode");

  return <button onClick={onChange}>Switch Buttons theme to {title}</button>;
};
