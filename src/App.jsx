/* eslint-disable react/jsx-key */
import { restaurants } from "./constants/mock";
import { Restaurants } from "./components/restaurants/component";
import { Footer } from "./components/footer/component";
import { Header } from "./components/header/component";
import { SwitchThemeButton } from "./components/theme-button/component";

import { ThemeContext } from "./contexts/theme-context";
import { useTheme } from "./hooks/use-theme";

export const App = () => {
  const { theme, newTheme } = useTheme();

  let style;
  if (theme === true) {
    style = "gray";
  } else {
    style = "";
  }

  return (
    <ThemeContext.Provider value={style}>
      <div>
        <Header header={"I'm header"} />
        <SwitchThemeButton
          onChange={() => {
            newTheme(theme);
          }}
        />
        <Restaurants restaurants={restaurants} />
        <Footer footer={"I'm footer"} />
      </div>
    </ThemeContext.Provider>
  );
};
