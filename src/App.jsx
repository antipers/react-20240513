/* eslint-disable react/jsx-key */

import { Restaurants } from "./components/restaurants/component";
import { ThemeContextProvider } from "./contexts/theme/provider";
import { UserContextProvider } from "./contexts/user/provider";
import { Layout } from "./components/layout/component";
import { Provider } from "react-redux";
import { store } from "./redux";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <Layout>
            <Restaurants restaurantIds={store.getState().restaurant.ids} />
          </Layout>
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
