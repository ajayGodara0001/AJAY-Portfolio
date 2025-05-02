import { createContext, useState } from "react";

export const AppContext = createContext();


const AppContextProvider = ({ children }) => { 
    const [isOpen, setIsOpen] = useState(false);
  
  const value = {
    isOpen, setIsOpen
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;