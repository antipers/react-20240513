/* eslint-disable react/jsx-key */

import { Button } from "../button/component";

export const RatingButtons = ({ maxRating = 5, onChange, value }) => {
  return (
    <div>
      <span>Choose your rating:</span>
      {new Array(maxRating).fill(null).map((_, index) => (
        <Button
          onClick={() => onChange(index + 1)}
          disabled={value === index + 1}
          type="rating"
        >
          {index + 1}
        </Button>
      ))}
    </div>
  );
};
