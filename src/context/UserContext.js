import React, { createContext, useState } from "react";

const UserContext = createContext();

export default UserContext;

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [toHome, setToHome] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, setToHome, toHome }}>
      {children}
    </UserContext.Provider>
  );
}
