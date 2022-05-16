import {
  Stack,
  Image,
  Text,
  Button,
  Box,
  useDisclosure,
  Link,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { ModalContentCustom } from "components/ModalContentCustom";
import { CardButton } from "components/UI/buttons/CardButton";

export function Card({
  title,
  abstract,
  image,
  link,
  logo,
  type = "resume-content",
  height,
  extra,
  ...rest
}) {
  // Types: job, resume-content
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack
        w={{ base: "90%", md: "70%" }}
        bg="white"
        boxShadow="0 0 20px rgba(0,0,0, 0.2)"
        _hover={{ boxShadow: "0 0 20px rgba(0,0,0, 0.4)" }}
        transition="box-shadow .4s"
        m="0 auto !important"
        alignItems="center"
        borderRadius="5px"
        overflow="hidden"
        {...rest}
      >
        {type === "job" ? (
          <Box w="100%" bg="#2D2D32">
            <Box
              w="100%"
              m="0 important"
              bgImage={logo}
              bgSize={{ base: "50%", "2xl": "45%" }}
              bgPos="center"
              h="200px"
              bgRepeat="no-repeat"
              p="0"
              transition="all .4s"
            />
          </Box>
        ) : null}
        {type === "resume-content" ? (
          <Box
            w="100%"
            overflow="hidden"
            transition="all .8s ease"
            maxH={isOpen ? "1500px" : height}
          >
            <Image src={image} w="100%" />
          </Box>
        ) : null}

        {type === "job" ? (
          <>
            <Text
              fontSize="20px"
              fontWeight="bold"
              textAlign="center"
              my="15px !important"
            >
              {title}
            </Text>
            <Text fontSize="18px" w="80%" mb="auto !important">
              {abstract}
              <br />
              <br />
              <Link href={link} target="_blank">
                Site da empresa
              </Link>
            </Text>
          </>
        ) : null}
        <Flex>
          <CardButton onClick={isOpen ? () => onClose() : () => onOpen()}>
            Clique para {isOpen ? "Reduzir" : "Ampliar"}
          </CardButton>
          {extra}
        </Flex>
      </Stack>
      {type === "job" ? (
        <ModalContentCustom
          minW="70%"
          borderRadius="10px"
          backdropFilter="blur(10px)"
          isOpen={isOpen}
          onClose={onClose}
          py="50px"
        >
          <Stack w="80%" mx="auto" borderRadius="10px" overflow="hidden">
            <Text fontSize="32px" mb="20px !important">
              {title}
            </Text>
            <Image src={image} />
          </Stack>
        </ModalContentCustom>
      ) : null}
    </>
  );
}
