export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantById = (state, id) =>
  selectRestaurantModule(state).entities[id];

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurantDishesIds = (state, id) =>
  selectRestaurantById(state, id)?.menu;

export const selectRestaurantReviewsIds = (state, id) =>
  selectRestaurantById(state, id)?.reviews;
