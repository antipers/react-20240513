import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { DishSlice } from "./entities/dish";
import { RestaurantSlice } from "./entities/restaurant";
import { ReviewSlice } from "./entities/review";
import { UserSlice } from "./entities/user";

export const store = configureStore({
  reducer: combineSlices(RestaurantSlice, DishSlice, ReviewSlice, UserSlice),
});

console.log("store", store.getState()); /* Оставил для себя */
