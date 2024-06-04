import { useReducer } from "react";
import { RatingButtons } from "../rating-buttons/component";
import { Button } from "../button/component";

function reducer(state, { type, payload } = {}) {
  switch (type) {
    case "setName":
      return { ...state, name: payload };
    case "setText":
      return { ...state, text: payload };
    case "setRating":
      return { ...state, rating: payload };
    case "setSave":
      return DEFAULT_FORM_VALUE;
    default:
      return state;
  }
}

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  rating: 5,
};

export const NewReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);
  
  return (
    <>
      <div>
        <span>Name</span>
        <input
          type="text"
          value={form.name}
          onChange={(event) =>
            dispatch({ type: "setName", payload: event.target.value })
          }
        />
      </div>
      <div>
        <span>Text</span>
        <input
          type="text"
          value={form.text}
          onChange={(event) =>
            dispatch({ type: "setText", payload: event.target.value })
          }
        />
      </div>
      <RatingButtons
        value={form.rating}
        onChange={(rating) => {
          dispatch({ type: "setRating", payload: rating });
        }}
      />
      <Button
        onClick={() => {
          dispatch({ type: "setSave" });
        }}
      >
        {" "}
        Save
      </Button>
    </>
  );
};
