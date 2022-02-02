import React from "react";
import { Box, Image, ChakraProvider } from "@chakra-ui/react";
import { ApplicationContextProvider } from "../src/contexts/ApplicationContext";
import { SmoothScrollProvider } from "components/SmoothScroll";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <ApplicationContextProvider>
          <SmoothScrollProvider>
            <Component {...pageProps} />
          </SmoothScrollProvider>
        </ApplicationContextProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
