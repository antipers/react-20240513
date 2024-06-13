import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewIds } from "../selectors";
import { selectRestaurantReviewsIds } from "../../restaurant/selectors";

export const getReviewsByRestaurantId = createAsyncThunk(
  "review/getReviewsByRestaurantId",
  async ({ restaurantId }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    return response.json();
  },
  {
    condition: ({ forceRefetch = false, restaurantId } = {}, { getState }) => {
      if (forceRefetch) {
        return true;
      }
      const state = getState();
      const loadedReviewsIds = selectReviewIds(state);
      const restaurantReviewsIds = selectRestaurantReviewsIds(
        state,
        restaurantId
      );
      return restaurantReviewsIds.some((id) => !loadedReviewsIds.includes(id));
    },
  }
);
