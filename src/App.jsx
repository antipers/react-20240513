/* eslint-disable react/jsx-key */
import { restaurants } from "./constants/mock";
import { Restaurants } from "./components/restaurants/component";
import { Footer } from "./components/footer/component";
import { Header } from "./components/header/component";
import { RestTabs } from "./components/restTabs/component";
import { useState } from "react";

export const App = () => {
  const [rest, setRest] = useState([restaurants[0]]);

  if (restaurants.length === 0) {
    return <div>Oops. Probably we have a huge problem</div>;
  }

  const copyRestaurantsArray = [...restaurants];

  return (
    <div>
      <Header header={"I'm header"} />

      <RestTabs
        tabs={restaurants}
        onClick={(event) => {
          setRest(
            copyRestaurantsArray.filter((restToChoose) => {
              return restToChoose.name == event.target.innerText;
            })
          );
        }}
      />

      <Restaurants restaurants={rest} />

      <Footer footer={"I'm footer"} />
    </div>
  );
};
