/* eslint-disable react/jsx-key */

export const RatingButtons = ({ maxRating = 5, onChange, value }) => {
  return (
    <div>
      <span>Choose your rating:</span>
      {new Array(maxRating).fill(null).map((_, index) => (
        <button
          onClick={() => onChange(index + 1)}
          disabled={value === index + 1}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};
