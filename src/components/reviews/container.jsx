/* eslint-disable react/jsx-key */
import { Reviews } from "../reviews/component";
import { selectRestaurantReviewsIds } from "../../redux/entities/restaurant/selectors";
import { useSelector } from "react-redux";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/get-reviews-by-restaurant-id";
import { useMemo } from "react";
import { useRequest } from "../../hooks/use-request";
import { REQUEST_STATUS } from "../../redux/ui/request/constants";

export const ReviewsContainer = ({ restaurantId }) => {
  
  const reviewsIds = useSelector((state) =>
    selectRestaurantReviewsIds(state, restaurantId)
  );
  
  const params = useMemo(() => ({ restaurantId }), [restaurantId]);
  const requestStatus = useRequest(getReviewsByRestaurantId, params);

  if (requestStatus === REQUEST_STATUS.pending) {
    return "Loading...";
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
