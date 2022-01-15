import React from "react";
import { Box, Link } from "@chakra-ui/react";

export function NavBarItem({ item }) {
  const [hover, setHover] = React.useState(false);
  return (
    <Link
      display="flex"
      alignItems="center"
      _hover={{ textDecoration: "none" }}
      fontFamily="titillium web"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      color={hover ? "#fac921" : "white"}
    >
      <Box
        width="10px"
        h="2.5px"
        bgColor={hover ? "#fac921" : "white"}
        marginRight="8px"
      ></Box>
      {item.name}
    </Link>
  );
}
