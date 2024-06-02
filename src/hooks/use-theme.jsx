import { useCallback } from "react";
import { useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(false);

  const newTheme = useCallback(() => {
    setTheme((currentTheme) => !currentTheme);
  }, []);

  return { theme, newTheme };
};
