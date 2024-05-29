/* eslint-disable react/jsx-key */

export const RatingButton = ({ ratingNumbers, onClick, isActive }) => {
  return (
    <>
      {ratingNumbers.map((_, index) => (
        <button
          onClick={onClick}
          value={index + 1}
          disabled={isActive === index + 1}
        >
          {index + 1}
        </button>
      ))}
    </>
  );
};
