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
  const baseMediaQuery = useMediaQuery({
    query: "(min-width: 0em) and (max-width: 479px)",
  });
  const smMediaQuery = useMediaQuery({
    query: "(min-width: 480px) and (max-width: 767px)",
  });
  const mdMediaQuery = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 991px)",
  });
  const lgMediaQuery = useMediaQuery({
    query: "(min-width: 992px) and (max-width: 1279px)",
  });
  const xlMediaQuery = useMediaQuery({
    query: "(min-width: 1280px) and (max-width: 1535px)",
  });

  const [isMobile, setIsMobile] = useState(undefined);
  const [base, setBase] = useState(undefined);
  const [sm, setSm] = useState(undefined);
  const [md, setMd] = useState(undefined);
  const [lg, setLg] = useState(undefined);
  const [xl, setXl] = useState(undefined);

  const [toggleMenu, handleToggleMenu] = useReducer((obj) => !obj, false);

  useEffect(() => {
    setIsMobile(isMobileMediaQuery);
  }, [isMobileMediaQuery]);

  useEffect(() => {
    setBase(baseMediaQuery);
  }, [baseMediaQuery]);

  useEffect(() => {
    setSm(smMediaQuery);
  }, [smMediaQuery]);

  useEffect(() => {
    setMd(mdMediaQuery);
  }, [mdMediaQuery]);

  useEffect(() => {
    setLg(lgMediaQuery);
  }, [lgMediaQuery]);

  useEffect(() => {
    setXl(xlMediaQuery);
  }, [xlMediaQuery]);

  return (
    <applicationContext.Provider
      value={{
        isMobile,
        base,
        sm,
        md,
        lg,
        xl,
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
