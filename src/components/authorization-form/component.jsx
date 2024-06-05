import { useState } from "react";

export const AuthorizationForm = ({ onLogin, onCancel }) => {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button
        onClick={() => {
          onLogin(name);
          setName("");
        }}
      >
        Login
      </button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};
