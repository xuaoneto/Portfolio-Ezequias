import { Box } from "@chakra-ui/react";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const SmoothScrollContext = createContext();

export function SmoothScrollProvider({ children }) {
  const [transform, setTransform] = useState(0);
  const scrollingContainerRef = useRef(null);
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);
  const smoothScrollingHandler = () => {
    const current = window.scrollY;
    setTransform(current);
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <>
      {/* <SmoothScrollContext.Provider
      value={{
        transform,
      }}
    >
      <Box
        w="100%"
        ref={scrollingContainerRef}
        transition="all .5s ease-out"
        transform={`translateY(-${transform}px)`}
        maxH="100vh"
      >
        {children}
      </Box>
    </SmoothScrollContext.Provider> */}
      {children}
    </>
  );
}
export const useSmoothScrollContext = () => {
  const context = useContext(SmoothScrollContext);
  if (context === undefined)
    throw new Error(
      "useApplicationContext must be used within a ApplicationContextProvider"
    );
  return context;
};
