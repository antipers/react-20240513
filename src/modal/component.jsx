import { createPortal } from "react-dom";

export const Modal = ({ onChange, onChangeCancel, onInput }) => {
  return (
    <>
      {createPortal(
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "30%",
            margin: "20px",
            backgroundColor: "crimson",
            padding: "20px",
          }}
        >
          <span>Your Login:</span>
          <input
            onChange={(event) => onInput(event.target.value)}
            type="text"
          />
          <button onClick={onChange}>LogIn</button>
          <button onClick={onChangeCancel}>Cancel</button>
        </div>,
        document.body
      )}
    </>
  );
};
