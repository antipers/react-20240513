import { createPortal } from "react-dom";

export const Modal = () => {
  return (
    <>
      {createPortal(
        <div>
          <span>Your Login:</span>
          <input type="text" />
          <button></button>
          <button></button>
        </div>
      )}
    </>
  );
};
