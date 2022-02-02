import React from "react";
import { Box, Grid, HStack, Text, Link, Flex } from "@chakra-ui/react";
import { NavBarItemsArray } from "./nav-bar-items-array";
import { NavBarItem } from "./nav-bar-item";
import { ScrollDown } from "components/UI/icons/scroll-down";

export function NavBar({ handleScrollTo }) {
  const container = React.useRef(null);
  const [pos, setPos] = React.useState("static");

  React.useEffect(() => {
    if (container.current) {
      const fixedTopPosition = container.current.offsetTop;

      window.addEventListener("scroll", (event) => {
        if (document.documentElement.scrollTop >= fixedTopPosition) {
          setPos("fixed");
        } else {
          setPos("static");
        }
      });
    }
  }, []);

  return (
    <Box
      marginTop="0 !important"
      top="0"
      pos={pos}
      ref={container}
      backgroundColor="#2c2d32"
      width="calc(100% - 80px)"
      h="80px"
      marginLeft="80px !important"
      display={{ base: "none", lg: "block" }}
    >
      <Grid color="white" templateColumns="17% 66% 17%" w="100%" h="100%">
        <Flex
          w="100%"
          h="100%"
          backgroundColor="rgba(255, 255, 255, 0.031 )"
          borderRight="2px solid rgba(255, 255, 255, 0.2 )"
          alignItems="center"
          justifyContent="center"
        >
          <ScrollDown />
        </Flex>
        <HStack justifyContent="space-evenly">
          {NavBarItemsArray.map((item, index) => {
            return (
              <NavBarItem
                key={`NavBarItem-${index}`}
                item={item}
                handleScrollTo={handleScrollTo}
              />
            );
          })}
        </HStack>
        <Box
          w="100%"
          h="100%"
          backgroundColor="rgba(255, 255, 255, 0.031 )"
          borderLeft="2px solid rgba(255, 255, 255, 0.2 )"
        />
      </Grid>
    </Box>
  );
}
