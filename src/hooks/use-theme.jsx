import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(false);

  const newTheme = useCallback(() => {
    setTheme((currentTheme) => !currentTheme);
  }, []);

  let context;
  if (theme) {
    context = "gray";
  } else {
    context = "";
  }

  useEffect(() => {
    let targetToSwitch = document.querySelectorAll("button");
    console.log(targetToSwitch);
    targetToSwitch.forEach(
      (target) => (target.style.backgroundColor = context)
    );
  }, [context]);

  return { theme, newTheme, context };
};
