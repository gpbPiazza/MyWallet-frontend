import React, { useContext, createContext, useState } from 'react';
const UserContext = createContext();

export default UserContext;

export function UserProvider(props) {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider {...props} value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);

  return context;
}
