import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useMediaQuery } from "react-responsive";

const applicationContext = createContext();

export const ApplicationContextProvider = ({ children }) => {
  const isMobileMediaQuery = useMediaQuery({ query: "(max-width: 1280px)" });
  const [isMobile, setIsMobile] = useState(undefined);
  const [toggleMenu, handleToggleMenu] = useReducer((obj) => !obj, false);

  useEffect(() => {
    setIsMobile(isMobileMediaQuery);
  }, [isMobileMediaQuery]);

  return (
    <applicationContext.Provider
      value={{
        isMobile,
        toggleMenu,
        handleToggleMenu,
      }}
    >
      {children}
    </applicationContext.Provider>
  );
};

export const useApplicationContext = () => {
  const context = useContext(applicationContext);
  if (context === undefined)
    throw new Error(
      "useApplicationContext must be used within a ApplicationContextProvider"
    );
  return context;
};
