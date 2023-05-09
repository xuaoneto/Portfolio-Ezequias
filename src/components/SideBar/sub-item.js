import { Box, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { MenuItem } from "./menu-item";

export function SubItem({ name, link, subItems }) {
  const [hover, stateHover] = useState();
  const [copied, setCopied] = useState(false);
  const [focus, setFocus] = useState(false);

  return (
    <>
      {subItems ? (
        <MenuItem
          subItems={subItems}
          itemName={name}
          link={link}
          subItem={true}
          focus={focus}
          setFocus={setFocus}
        />
      ) : (
        <Link
          h="40px"
          px="10px"
          w="100%"
          onMouseOver={() => stateHover(true)}
          onMouseOut={() => stateHover(false)}
          pos="relative"
          alignItems="center"
          href={link}
          color="white"
          display="flex"
          _hover={{ textDecor: "none", color: "#fac921" }}
          justifyContent="space-between"
          target="_blank"
          _focus={{}}
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
          {name} {copied ? <Text fontSize="9">{copied}</Text> : null}
        </Link>
      )}
    </>
  );
}
