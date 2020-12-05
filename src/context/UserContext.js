import React, { createContext, useState } from 'react';
const UserContext = createContext();

export default UserContext;

export function UserProvider(props) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

