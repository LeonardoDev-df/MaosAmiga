import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userDocId, setUserDocId] = useState(null);

  const setUserDocIdValue = (value) => {
    setUserDocId(value);
  };

  return (
    <UserContext.Provider value={{ userDocId, setUserDocIdValue }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
