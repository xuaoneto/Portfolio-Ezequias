import React from "react";
import {
  chakra,
  Flex,
  Grid,
  HStack,
  Box,
  Text,
  Button,
  Link,
  Stack,
} from "@chakra-ui/react";
import { Phone } from "components/UI/icons/phone";
import { SocialIcons } from "components/SocialIcons";

export function Footer() {
  const handleScrollTo = (id) => (event) => {
    event.preventDefault();
    const element = document.querySelector(id);
    const rect = element.getBoundingClientRect();
    window.scrollBy({
      top: rect.top - 140,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box w="100%" pt="70px" bg="#fff">
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
          direction={{ base: "column", md: "row" }}
          py="20px"
          px={{ base: "20px", md: "50px" }}
          alignItems="center"
          justifyContent="space-between"
          boxShadow="-12px -11px 0px 3px rgba(0,0,0,0.15)"
          borderRadius="5px"
        >
          <Box>
            <Text fontSize="20" fontWeight="bold">
              Pronto para o próximo projeto?
            </Text>
            <Text fontSize="15" mb={{ base: "20px", md: "0" }}>
              Vamos começar!
            </Text>
          </Box>
          <Button
            bgColor="#2D2D32"
            borderRadius="6px"
            fontSize={{ base: "15", md: "20" }}
            leftIcon={<Phone size="15px" />}
            _hover={{ color: "#fac921" }}
          >
            Contate-me
          </Button>
        </Flex>

        <Stack
          w="80%"
          marginTop="80px"
          marginBottom="80px"
          alignItems="center"
          justifyContent="center"
        >
          <Stack alignItems="center" spacing="15px" textAlign="center">
            <Flex
              alignItems="center"
              mt="20px"
              w="130px"
              justifyContent="space-between"
            >
              <SocialIcons />
            </Flex>
            <Flex alignItems="start">
              <Link mr="20px" onClick={handleScrollTo("#VideoSection")}>
                Home
              </Link>
              <Link mr="20px" onClick={handleScrollTo("#ServicesSection")}>
                Serviços
              </Link>
              <Link mr="20px" onClick={handleScrollTo("#BlogSection")}>
                Blog
              </Link>
              <Link
                target="_blank"
                href="https://www.udemy.com/course/curso-de-desenho-vetorial-com-inkscape/learn/lecture/31062278"
              >
                Adquira meu curso
              </Link>
            </Flex>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}
