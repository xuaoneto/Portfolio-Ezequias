import {
  Stack,
  Image,
  Text,
  Button,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { ModalContentCustom } from "components/ModalContentCustom";
import { CardButton } from "components/UI/buttons/CardButton";

export function Card({
  title,
  abstract,
  image,
  type = "resume-content",
  height,
  ...rest
}) {
  // Types: job, resume-content
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hovered, setHovered] = React.useState(false);

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
          <Box
            w="100%"
            m="0 important"
            bgImage={image}
            bgSize="100%"
            h="200px"
            bgRepeat="no-repeat"
            p="0"
            transition="all .4s"
            _hover={{ bgSize: "150%", bgPos: "center" }}
          />
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
            </Text>
          </>
        ) : null}
        <CardButton
          hovered={hovered}
          setHovered={setHovered}
          onClick={isOpen ? () => onClose() : () => onOpen()}
        >
          Clique para {isOpen ? "Reduzir" : "Ampliar"}
        </CardButton>
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
