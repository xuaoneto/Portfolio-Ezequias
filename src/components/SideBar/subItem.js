import React from "react";
import { Flex, Box } from "@chakra-ui/react";
export function SubItem({ name, link }) {
  const [hover, stateHover] = React.useState();
  return (
    <Flex
      h="40px"
      pl="10px"
      w="100%"
      onMouseOver={() => stateHover(true)}
      onMouseOut={() => stateHover(false)}
      pos="relative"
      alignItems="center"
      color="white"
    >
      <Box
        pos="absolute"
        w={hover ? "100%" : "0"}
        bg="rgba(255, 255, 255, 0.031)"
        top="0"
        left="0"
        h="100%"
        transition="width .3s ease"
      />
      {name}
    </Flex>
  );
}
