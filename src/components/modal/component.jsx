import { createPortal } from "react-dom";
import { Button } from "../button/component";

export const Modal = ({ onClose, children }) => {
  return createPortal(
    <>
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          backgroundColor: "grey",
          opacity: "0.5",
          zIndex: "1",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50vh",
          left: "50vw",
          backgroundColor: "lemonchiffon",
          zIndex: "2",
          transform: "translate(-50%, -50%)",
          padding:'20px'
        }}
      >
        <Button onClick={onClose}>X</Button>
        {children}
      </div>
    </>,
    document.getElementById("modal")
  );
};
