import { ProgressBar } from "../progress-bar/component";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { Modal } from "../../modal/component";

export const Header = ({
  header,
  onChangeEnter,
  onChangeQuit,
  onChangeLogging,
  isLogged,
  onChangeSuccess,
  onChangeLogOut
}) => {
  const isLoggedRender = useContext(UserContext);
  
  return (
    <header>
      <ProgressBar />
      {isLoggedRender ? (
        <>
          <span>Hello, {isLoggedRender}</span>
          <button onClick={onChangeLogOut}>{"LogOut"}</button>
        </>
      ) : (
        <button onClick={onChangeEnter}>{"LogIn"}</button>
      )}
      {isLogged === "Logging" ? (
        <div>
          {" "}
          <Modal
            onChange={onChangeLogging}
            onChangeCancel={onChangeQuit}
            onInput={(userName) => onChangeSuccess(userName)}
          />{" "}
        </div>
      ) : null}

      {header}
    </header>
  );
};
