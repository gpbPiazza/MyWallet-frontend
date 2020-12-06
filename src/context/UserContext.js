import React, { createContext, useState } from 'react';
const UserContext = createContext();

export default UserContext;

export function UserProvider(props) {
  const [user, setUser] = useState(null);
  const [toHome, setToHome] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, setToHome, toHome}}>
      {props.children}
    </UserContext.Provider>
  );
}

