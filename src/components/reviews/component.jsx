/* eslint-disable react/jsx-key */
/* import { Users } from "../users/component"; */
import { ReviewContainer } from "../review/container";

export const Reviews = ({ reviewsIds }) => {
  if (!reviewsIds) {
    return "Отзывы в процессе модерации";
  }

  return (
    <ul>
      {reviewsIds.map((id) => (
        <li>
          <ReviewContainer id={id} />
        </li>
      ))}
    </ul>
  );
};
