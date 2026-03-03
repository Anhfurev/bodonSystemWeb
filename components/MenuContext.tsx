import { createContext, useContext, useState } from "react";

type MenuContextType = {
  isMenuOpen: boolean;
  setIsMenuOpen: (state: boolean) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  return context;
};

export const MenuProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: MenuContextType;
}) => {
  const { isMenuOpen, setIsMenuOpen } = value;

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
