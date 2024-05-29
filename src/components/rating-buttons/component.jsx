import { RatingButton } from "../rating-button/component";

export const RatingButtons = ({
  countOfNumbers = 6,
  onChange,
  value,
  isActive,
}) => {
  let countOfRatingNumbers = [];
  for (let index = 1; index < countOfNumbers; index++) {
    countOfRatingNumbers.push(index);
  }

  return (
    <div>
      <span>Choose your rating:</span>
      <RatingButton
        ratingNumbers={countOfRatingNumbers}
        onClick={onChange}
        value={value}
        isActive={isActive}
      />
    </div>
  );
};
