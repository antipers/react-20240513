/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import { Review } from "../review/component";

export const Reviews = ({ reviewsIds }) => {
  const reviews = useSelector((state) => state.review.entities);
  if (!reviewsIds) {
    return "Отзывы в процессе модерации";
  }
  return (
    <ul>
      {reviewsIds.map((reviewId) => (
        <li>
          <Review reviewText={reviews[reviewId].text} />
        </li>
      ))}
    </ul>
  );
};
