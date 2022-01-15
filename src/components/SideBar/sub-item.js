import React from "react";
import { Flex, Box, Link, Text } from "@chakra-ui/react";

export function SubItem({ name, link }) {
  const [hover, stateHover] = React.useState();
  const [copied, setCopied] = React.useState(false);

  const copy = name.indexOf("+55") !== -1 || name.indexOf("@") !== -1;

  return (
    <Link
      h="40px"
      px="10px"
      w="100%"
      onClick={
        copy
          ? () => {
              navigator.clipboard.writeText(name);
              setCopied("copiado!");
              setTimeout(() => {
                setCopied(false);
              }, 3000);
            }
          : null
      }
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
  );
}
