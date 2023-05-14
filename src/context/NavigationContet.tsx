import { useState, createContext, ReactNode } from "react";

interface NavBarContextInterface {
  toggleNavBar: () => void;
  isNavbarOpen: boolean;
  setNavBarToFalse: () => void;
}

// interface FOR THE state values (useState)
// SETTNG INTERFACEFOR THE CHILDREN AND THE VALUE
interface isNavbarOpenProps {
  children: ReactNode;
}

export const NavBarContext = createContext({} as NavBarContextInterface);

export function NavBarContextProvider({ children }: isNavbarOpenProps) {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  function toggleNavBar() {
    console.log(isNavbarOpen);

    setIsNavbarOpen(!isNavbarOpen);
  }
  function setNavBarToFalse() {
    setIsNavbarOpen(false);
  }

  return (
    <NavBarContext.Provider
      value={{ isNavbarOpen, toggleNavBar, setNavBarToFalse }}
    >
      {children}
    </NavBarContext.Provider>
  );
}
