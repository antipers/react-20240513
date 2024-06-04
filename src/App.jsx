/* eslint-disable react/jsx-key */
import { restaurants } from "./constants/mock";
import { Restaurants } from "./components/restaurants/component";
import { Footer } from "./components/footer/component";
import { Header } from "./components/header/component";
import { ThemeContextProvider } from "./contexts/theme/provider";

export const App = () => {
  return (
    <ThemeContextProvider>
      <div>
        <Header header={"I'm header"} />
        <Restaurants restaurants={restaurants} />
        <Footer footer={"I'm footer"} />
      </div>
    </ThemeContextProvider>
  );
};
