/* eslint-disable react/jsx-key */
import { restaurants } from "./constants/mock";
import { Restaurants } from "./components/restaurants/component";
import { Footer } from "./components/footer/component";
import { Header } from "./components/header/component";
import { SwitchThemeButton } from "./components/theme-button/component";

import { ThemeContext } from "./contexts/theme";
import { useTheme } from "./hooks/use-theme";
import { UserContext } from "./contexts/user";
import { useState } from "react";

export const App = () => {
  const { theme, newTheme, context } = useTheme();
  const [isLogged, setIsLogged] = useState(false);
  

  let userSample;
  if (!isLogged) {
    userSample = false;
  } else {
    userSample = "Denis";
  }

  return (
    <UserContext.Provider value={userSample}>
      <ThemeContext.Provider value={context}>
        <div>
          <Header
            header={"I'm header"}
            onChange={() => setIsLogged(!isLogged)}
          />
          <SwitchThemeButton
            onChange={() => {
              newTheme(theme);
            }}
          />
          <Restaurants restaurants={restaurants} />
          <Footer footer={"I'm footer"} />
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};
