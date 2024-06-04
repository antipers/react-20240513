import { ProgressBar } from "../progress-bar/component";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";

export const Header = ({ header, onChange }) => {
  const isLoggedRender = useContext(UserContext);
  console.log(isLoggedRender);
  return (
    <header>
      <ProgressBar />
      {isLoggedRender ? (
        <>
          <span>Hello, {isLoggedRender}</span>
          <button onClick={onChange}>{"LogOut"}</button>
        </>
      ) : (
        <button onClick={onChange}>{"LogIn"}</button>
      )}

      {header}
    </header>
  );
};
