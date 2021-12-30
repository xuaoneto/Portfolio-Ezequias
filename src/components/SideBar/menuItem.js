import { Flex, Box, Image, Stack, Link } from "@chakra-ui/react";
import React from "react";
import rightarrow from "assets/images/rightarrow.svg";
import { SubItem } from "./subItem";

export function MenuItem({ children, link, subItems }) {
  const [hover, stateHover] = React.useState();
  const [focus, setFocus] = React.useState(false);
  const ref = React.useRef();
  return (
    <>
      <Flex
        ref={ref}
        color={"white"}
        fontSize="12px"
        _focus={{ color: "#fac921" }}
        onClick={() => setFocus(!focus)}
        _hover={{ color: "#fac921" }}
        onMouseOver={() => stateHover(true)}
        onMouseOut={() => stateHover(false)}
        w="90%"
        cursor="pointer"
        display="flex"
        pos="relative"
        h="40px"
        fontWeight="500"
        alignItems="center"
        px="10px"
        justifyContent="space-between"
      >
        <Box
          pos="absolute"
          w={hover ? "100%" : "0"}
          bg="rgba(255, 255, 255, 0.031)"
          top="0"
          zIndex="-1"
          left="0"
          h="100%"
          transition="width .3s ease"
        />
        {children}
        {subItems ? (
          <Image
            src={rightarrow.src}
            w="10px"
            alt="arrow"
            transform={focus ? "rotate(90deg)" : "rotate(0)"}
            transition="transform .3s ease"
          />
        ) : null}
      </Flex>
      {subItems ? (
        <Stack
          pl="10px"
          w="90%"
          fontSize="12px"
          overflow="hidden"
          h={focus ? `${subItems.length * 40}px` : "0"}
          transition="height .3s ease"
          _focus={{ color: "#fac921" }}
        >
          {subItems.map((item, index) => {
            return (
              <SubItem
                key={`SubItem-${index}`}
                name={item.name}
                link={item.link}
              ></SubItem>
            );
          })}
        </Stack>
      ) : null}
    </>
  );
}
