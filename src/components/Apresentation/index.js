import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";

export function Apresentation() {
  const [hover, setHover] = React.useState();

  return (
    <Box
      m={{
        base: "auto 10%",
        md: "50% 0 0 15%",
        lg: "50% 0 0 25%",
        xl: "13% 0 0 25%",
        "2xl": "20% 0 0 25%",
      }}
      color="white"
      fontSize={{ base: "35px", md: "45px" }}
      width={{ base: "auto", md: "620px" }}
    >
      <Text marginBottom="20px">
        Olá, eu sou <Text color="#fac921">Ezequias Rocha</Text>
      </Text>
      <Box bg="rgba(44, 45, 50, 0.5)" borderRadius="3px" margin="3px">
        <Text fontSize="20px" textAlign="center">
          Scrum Master, Especialista em Business Intelligence e Desenvolvedor
        </Text>
      </Box>
      <Button
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        bg="#fac921"
        _hover={{ bg: "#fac921" }}
        marginTop="25px"
      >
        <Box
          h="2px"
          transition="all 0.3s"
          bg="white"
          borderRadius="5px"
          width={hover ? "15px" : "0"}
          marginRight={hover ? "11px" : "0"}
        />
        Portfólio
      </Button>
    </Box>
  );
}
