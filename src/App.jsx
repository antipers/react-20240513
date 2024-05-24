/* eslint-disable react/jsx-key */
import { restaurants } from "./constants/mock";
import { Restaurants } from "./components/restaurants/component";
import { Footer } from "./components/footer/component";
import { Header } from "./components/header/component";

export const App = () => {
  if (restaurants.length === 0) {
    return <div>Oops. Probably we have a huge problem</div>;
  }

  return (
    <div>
      <Header header={"I'm header"} />

      <Restaurants restaurants={restaurants} />

      <Footer footer={"I'm footer"} />
    </div>
  );
};
