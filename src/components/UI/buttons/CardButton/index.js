import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";

export function CardButton({ children, ...rest }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Button
      p="0.5rem 1rem"
      borderRadius="5px"
      bg="transparent"
      transition="all .3s"
      border="1px solid rgba(0,0,0, 0.2)"
      mt="15px !important"
      mb="40px !important"
      _hover={{ background: "#2c2d32", color: "#fac921" }}
      fontSize="15px"
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      fontFamily="Titillium Web"
      fontWeight="bold"
      color="rgba(0,0,0, 0.7)"
      display="flex"
      className="buttomcard"
      {...rest}
    >
      <Box
        w={hovered ? "15px" : "0"}
        transition="all .3s"
        h="2px"
        mr={hovered ? "5px" : "0"}
        bg="#fac921"
      />
      {children}
    </Button>
  );
}
