import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selectors";
import { selectRestaurantDishesIds } from "../../restaurant/selectors";

export const getDishesByRestaurantId = createAsyncThunk(
  "dishes/getDishesByRestaurantId",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );
    return response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const loadedDishesIds = selectDishIds(state);
      const restaurantDishesIds = selectRestaurantDishesIds(
        state,
        restaurantId
      );
      return restaurantDishesIds.some((id) => !loadedDishesIds.includes(id));
    },
  }
);
