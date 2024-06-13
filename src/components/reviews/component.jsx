/* eslint-disable react/jsx-key */

import { ReviewContainer } from "../review/container";

export const Reviews = ({ reviewId }) => {
  if (!reviewId) {
    return "Отзывы в процессе модерации";
  }

  return <ReviewContainer id={reviewId} />;
};
