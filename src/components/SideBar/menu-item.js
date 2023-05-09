import { Flex, Box, Image, Stack, Link } from "@chakra-ui/react";
import React from "react";
import rightarrow from "assets/images/rightarrow.svg";
import { SubItem } from "./sub-item";

export function MenuItem({
  itemName,
  link,
  subItems,
  focus = "",
  setFocus = () => {},
  subItem,
  close = () => {},
}) {
  const [hover, stateHover] = React.useState();

  const ref = React.useRef();

  const scrollTo = link && link.indexOf("#") != -1;

  return (
    <>
      <Link
        ref={ref}
        color={focus === itemName ? "#fac921" : "white"}
        fontSize={
          subItem ? "12px" : { base: "13", md: "14", xl: "12", "2xl": "14" }
        }
        onClick={() => {
          focus === itemName ? setFocus(false) : setFocus(itemName);
          scrollTo ? close(link) : null;
        }}
        _hover={{ color: "#fac921" }}
        onMouseOver={() => stateHover(true)}
        onMouseOut={() => stateHover(false)}
        w={subItem ? "100%" : "90%"}
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
        {itemName}
        {subItems ? (
          <Image
            src={rightarrow.src}
            w="10px"
            alt="arrow"
            transform={focus === itemName ? "rotate(90deg)" : "rotate(0)"}
            transition="transform .3s ease"
          />
        ) : null}
      </Link>
      {subItems ? (
        <Stack
          pl="10px"
          w="90%"
          spacing="0"
          fontSize="12px"
          overflow="hidden"
          maxH={focus === itemName ? "300px" : "0"}
          transition="max-height .4s ease"
        >
          {subItems.map((item, index) => {
            return (
              <SubItem
                key={`SubItem-${index}`}
                name={item.name}
                link={item.link}
                subItems={item.subItems}
              />
            );
          })}
        </Stack>
      ) : null}
    </>
  );
}
