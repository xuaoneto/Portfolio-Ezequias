import {
  Box,
  Stack,
  Image,
  Link,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  useDisclosure,
  Container,
  Text,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/images/logo.svg";
import medium from "../../assets/images/medium.svg";
import instagram from "../../assets/images/instagram.svg";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import { HumbMenu } from "../HumbMenu";
import { menuItemsArray } from "./menuItemsArray";

export function SideBar({ ...rest }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Stack
        w="80px"
        h="100vh"
        pos="sticky"
        boxShadow={isOpen ? null : "0 0 1em black"}
        m="0"
        justifyContent="space-between"
        _before={{
          content: "''",
          pos: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          bgColor: "rgb(44, 45, 50)",
          opacity: "0.8",
          zIndex: "-1",
        }}
        zIndex="99999"
        {...rest}
      >
        <Box>
          <Image mx="auto" w="30px" mt="25px" src={logo.src} />
          <HumbMenu
            toggle={isOpen}
            onToggle={onOpen}
            offToggle={onClose}
            title="Menu"
            ref={btnRef}
          />
        </Box>
        <Stack alignItems="center" spacing="20px" mb="25px !important">
          <Link
            href="https://github.com/ezequias"
            target="_blank"
            transition="transform .3s"
            _hover={{ transform: "scale(1.3)" }}
          >
            <Image w="24px" src={github.src} />
          </Link>
          <Link
            href="https://ezequiasrocha.medium.com/"
            target="_blank"
            transition="transform .3s"
            _hover={{ transform: "scale(1.3)" }}
          >
            <Image w="24px" src={medium.src} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ezequiasrocha/"
            target="_blank"
            transition="transform .3s"
            _hover={{ transform: "scale(1.3)" }}
          >
            <Image w="24px" src={linkedin.src} />
          </Link>
          <Link
            href="https://www.instagram.com/ezequias/"
            target="_blank"
            transition="transform .3s"
            _hover={{ transform: "scale(1.3)" }}
          >
            <Image w="24px" src={instagram.src} />
          </Link>
        </Stack>
      </Stack>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay bg="transparent" backdropFilter="blur(16px)" />

        <DrawerContent
          ml="80px"
          minWidth="20vw"
          bgColor="#252425"
          fontFamily="Montserrat, sans-serif"
        >
          <Stack padding="80px">
            <Text color="white" fontSize="30px">
              Menu
            </Text>
            <Stack>
              {menuItemsArray.map((item, index) => {
                return (
                  <Link color="white" fontSize="12px">
                    {item.name}
                  </Link>
                );
              })}
            </Stack>
          </Stack>
        </DrawerContent>
      </Drawer>
    </>
  );
}
