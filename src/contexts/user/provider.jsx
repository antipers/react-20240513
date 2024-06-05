import { useState } from "react";
import { UserContext } from "./context";
import { useMemo } from "react";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const contextValue = useMemo(
    () => ({
      user,
      login: setUser,
      logout: () => setUser(null),
    }),
    [user]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
