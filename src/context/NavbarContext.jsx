import React, { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const useNavbar = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
  const [isTransparent, setIsTransparent] = useState(false);

  return (
    <NavbarContext.Provider value={{ isTransparent, setIsTransparent }}>
      {children}
    </NavbarContext.Provider>
  );
};