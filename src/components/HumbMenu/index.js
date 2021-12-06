import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

export function HumbMenu({ toggle, setToggle, title }) {
  return (
    <Stack
      w="80px"
      mt="25px"
      alignItems="center"
      spacing="7px"
      onClick={() => setToggle(!toggle)}
      transform={toggle ? "translateX(-11%)" : null}
    >
      <Box
        w="28px"
        h="2px"
        bgColor="#fac921"
        transition="all 0.3s linear"
        transform={toggle ? "rotate(-45deg) translateY(13px)" : "rotate(0)"}
      />
      <Box
        w="28px"
        h="2px"
        bgColor="#fac921"
        transition="all 0.3s linear"
        opacity={toggle ? "0" : "1"}
        transform={toggle ? "translateX(-2rem)" : "translateX(0)"}
      />
      <Box
        w="28px"
        h="2px"
        bgColor="#fac921"
        transition="all 0.3s linear"
        transform={toggle ? "rotate(45deg) translateY(-12px)" : "rotate(0)"}
      />
      {title && (
        <Text
          color="white"
          fontSize="13px"
          opacity={toggle ? "1" : "0.6"}
          transition="opacity .3s"
          transform={toggle ? "translateX(27%)" : null}
        >
          {title}
        </Text>
      )}
    </Stack>
  );
}
