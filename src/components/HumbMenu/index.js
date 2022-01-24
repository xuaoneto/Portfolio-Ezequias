import { Box, Stack, Text } from "@chakra-ui/react";
import { useApplicationContext } from "contexts/ApplicationContext";
import React from "react";

export function HumbMenu({
  toggle,
  onToggle,
  offToggle,
  title,
  color,
  ...rest
}) {
  const [hover, stateHover] = React.useState();
  const { base, sm } = useApplicationContext();
  return (
    <Stack
      w="80px"
      mt="25px"
      alignItems="center"
      onClick={toggle ? offToggle : onToggle}
      transform={toggle ? "translateX(-11%)" : null}
      onMouseOver={() => stateHover(true)}
      onMouseOut={() => stateHover(false)}
      id="toggleMenu"
      {...rest}
    >
      <Box>
        <Box
          w="28px"
          h="2px"
          bgColor="#fac921"
          transition="all 0.3s linear"
          transform={toggle ? "rotate(-45deg) translateY(13px)" : "rotate(0)"}
        />
        <Box
          w={hover ? "28px" : toggle ? "28px" : "14px"}
          h="2px"
          bgColor="#fac921"
          transition="all 0.3s linear"
          opacity={toggle ? "0" : "1"}
          transform={toggle ? "translateX(-2rem)" : "translateX(0)"}
          mt="7px"
        />
        <Box
          w={hover ? "28px" : toggle ? "28px" : "20px"}
          h="2px"
          bgColor="#fac921"
          transition="all 0.3s linear"
          transform={toggle ? "rotate(45deg) translateY(-12px)" : "rotate(0)"}
          mt="7px"
        />
      </Box>
      {title && (
        <Text
          color="white"
          fontSize="13px"
          lineHeight="13px"
          opacity={toggle ? "1" : base || sm ? "1" : "0.6"}
          transition="opacity .3s"
          transform={toggle ? "translateX(27%)" : null}
        >
          {title}
        </Text>
      )}
    </Stack>
  );
}
