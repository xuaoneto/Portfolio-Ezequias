import { Box, Text } from "@chakra-ui/react";

export function Apresentation() {
  return (
    <Box m="25% 0 0 25%" fontSize="45px">
      <Text color="white">
        Olá, Sou{" "}
        <Text as="span" color="#fac921">
          Ezequias Rocha
        </Text>
      </Text>
    </Box>
  );
}
