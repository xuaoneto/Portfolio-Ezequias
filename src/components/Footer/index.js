import React from "react";
import {
  chakra,
  Flex,
  Grid,
  HStack,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { Phone } from "components/UI/icons/Phone";
import { SocialIcons } from "components/SocialIcons";

export function Footer() {
  return (
    <Flex
      direction="column"
      color="white"
      alignItems="center"
      w="100%"
      backgroundColor="#2D2D32"
      position="center"
      fontFamily="titillium web"
    >
      <Flex
        backgroundColor="#fac921"
        w="80%"
        marginTop="-30px"
        py="20px"
        px="50px"
        alignItems="center"
        justifyContent="space-between"
        boxShadow="-12px -11px 0px 3px rgba(0,0,0,0.15)"
      >
        <Box>
          <Text fontSize="20px" fontWeight="bold">
            Pronto para o próximo projeto?
          </Text>
          <Text fontSize="15px">Vamos começar!</Text>
        </Box>
        <Button
          bgColor="#2D2D32"
          borderRadius="6px"
          _hover={{ color: "#fac921" }}
        >
          <Phone size="15px" />
          <Text marginLeft="8px">Contate-me</Text>
        </Button>
      </Flex>

      <Grid
        w="80%"
        marginTop="80px"
        marginBottom="80px"
        templateColumns="1fr 1fr 1fr 1fr"

        // alignItems="center"
        // justifyContent="space-evenly"
      >
        <Box w="130px">Nery</Box>
        <Box>Nery</Box>
        <Box>Nery</Box>
        <Box>
          <Text>Siga-me</Text>
          <Flex
            alignItems="center"
            h="50px"
            w="130px"
            justifyContent="space-between"
          >
            <SocialIcons />
          </Flex>
        </Box>
      </Grid>
    </Flex>
  );
}
