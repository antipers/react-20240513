/* eslint-disable react/jsx-key */
import { Review } from "../review/component";

export const Reviews = ({ reviews }) => {
  if (!reviews) {
    return "Отзывы в процессе модерации";
  }
  return (
    <ul>
      {reviews.map((r) => (
        <li>
          <Review review={r.text} />
        </li>
      ))}
    </ul>
  );
};
