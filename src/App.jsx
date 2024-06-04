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
import "./styles/disabled.css";

export const App = () => {
  const { theme, newTheme, context } = useTheme();
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);

  // let userName;
  // if (isLogged === false) {
  //   userName = false;
  // } else if (isLogged === true) {
  //   userName = "Denis";
  // } else if (isLogged === "Logging") {
  //   userName = "Denis"; /* ИСПРАВИТЬ */
  // }

  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={context}>
        <div className={isLogged === "Logging" ? "disabled" : ""}>
          <Header
            header={"I'm header"}
            isLogged={isLogged}
            onChangeEnter={() => setIsLogged("Logging")}
            onChangeQuit={() => setIsLogged(false)}
            onChangeLogging={() => setIsLogged(true)}
            onOn={(userName) => setUser(userName)}
            onChangeLogOut={() => setUser(false)}
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
