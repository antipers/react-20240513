/* eslint-disable react/jsx-key */

import { Restaurants } from "./components/restaurants/component";
import { ThemeContextProvider } from "./contexts/theme/provider";
import { UserContextProvider } from "./contexts/user/provider";
import { Layout } from "./components/layout/component";

export const App = () => {
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
