/* eslint-disable react/jsx-key */

import { Restaurants } from "./components/restaurants/component";
import { ThemeContextProvider } from "./contexts/theme/provider";
import { UserContextProvider } from "./contexts/user/provider";
import { Layout } from "./components/layout/component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRestaurants } from "./redux/entities/restaurant/thunks/get-restaurants";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getRestaurants()), [dispatch]);
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Layout>
          <Restaurants />
        </Layout>
      </UserContextProvider>
    </ThemeContextProvider>
  );
};
