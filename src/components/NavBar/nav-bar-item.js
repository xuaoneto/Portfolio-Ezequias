import React from "react";
import { Box, Link } from "@chakra-ui/react";

export function NavBarItem({ item, handleScrollTo }) {
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
      onClick={handleScrollTo(item.link)}
    >
      <Box
        width="10px"
        h="2.5px"
        bgColor={hover ? "#fac921" : "white"}
        marginRight="8px"
      />
      {item.name}
    </Link>
  );
}
