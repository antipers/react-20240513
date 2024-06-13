/* eslint-disable react/jsx-key */
import { useDispatch } from "react-redux";
import { Reviews } from "../reviews/component";
import { selectRestaurantReviewsIds } from "../../redux/entities/restaurant/selectors";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/get-reviews-by-restaurant-id";

export const ReviewsContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();

  const reviewsIds = useSelector((state) =>
    selectRestaurantReviewsIds(state, restaurantId)
  );
  

  useEffect(() => {
    dispatch(getReviewsByRestaurantId({restaurantId}));
  }, [dispatch, restaurantId]);

  if (!restaurantId) {
    return "Отзывы в процессе модерации";
  }

  return (
    <ul>
      {reviewsIds.map((reviewId) => (
        <li>
          <Reviews reviewId={reviewId} />
        </li>
      ))}
    </ul>
  );
};
