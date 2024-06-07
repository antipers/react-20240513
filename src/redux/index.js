import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { DishSlice } from "./entities/dish/dish";
import { RestaurantSlice } from "./entities/restaurant/restaurant";
import { ReviewSlice } from "./entities/review/review";
import { UserSlice } from "./entities/user/user";

export const store = configureStore({
  reducer: combineSlices(RestaurantSlice, DishSlice, ReviewSlice, UserSlice),
});

console.log("store", store.getState()); /* Оставил для себя */
