/* import { useContext } from "react";
import { UserContext } from "../contexts/user/context"; */
import { Button } from "../button/component";
import { useState } from "react";
import { Modal } from "../modal/component";
import { useCallback } from "react";
import { AuthorizationForm } from "../authorization-form/component";
import { useUser } from "../../contexts/user/hooks";

export const AuthorizationButton = () => {
  /* const { user, logout, login } = useContext(UserContext); */
  const { user, logout, login } = useUser();
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => setIsVisible(false), []);
  const handleLogin = useCallback(
    (name) => {
      login(name);
      handleClose();
    },
    [login, handleClose]
  );

  return (
    <div>
      <span>{user}</span>
      {user ? (
        <Button onClick={logout}>Logout</Button>
      ) : (
        <Button onClick={() => setIsVisible(true)}>Login</Button>
      )}
      {isVisible && (
        <Modal onClose={handleClose}>
          <AuthorizationForm onCancel={handleClose} onLogin={handleLogin} />
        </Modal>
      )}
    </div>
  );
};
