import {
  Box,
  Stack,
  Image,
  Link,
  Drawer,
  Flex,
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
import { HumbMenu } from "../HumbMenu";
import { menuItemsArray } from "./MenuItemsArray";
import { MenuItem } from "./menuItem";
import { SocialIcons } from "components/SocialIcons";

export function SideBar({ ...rest }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hoverMenu, stateHoverMenu] = React.useState();
  const btnRef = React.useRef();
  return (
    <>
      <Stack
        w="80px"
        h="100vh"
        pos="sticky"
        top="0"
        boxShadow="0 0 1em rgba(0,0,0, 0.5)"
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
          <SocialIcons />
        </Stack>
      </Stack>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay backdropFilter="blur(16px)" />

        <DrawerContent minWidth={{ md: "480px" }} bgColor="#252425">
          <Stack justifyContent="space-between" h="100%" padding="25% 0 0 80px">
            <Box ml="80px">
              <Flex
                pos="relative"
                mb="65px"
                w="50%"
                onMouseOver={() => stateHoverMenu(true)}
                onMouseOut={() => stateHoverMenu(false)}
              >
                <Text color="white" fontSize="30px">
                  Menu
                </Text>
                <Box
                  w={hoverMenu ? "0" : "100%"}
                  transition="width .4s ease"
                  ml="-50px"
                  h="45px"
                  bg="rgba(255, 255, 255, 0.031)"
                />
              </Flex>
              <Stack spacing="0">
                {menuItemsArray.map((item, index) => {
                  return (
                    <MenuItem
                      subItems={item.subItems}
                      key={`MenuItem-${index}`}
                    >
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Stack>
            </Box>
            <Flex flex="auto" alignItems="end">
              <Text
                whiteSpace="nowrap"
                transform="rotate(-90deg) translateY(-120px) translateX(160px)"
                fontSize="45px"
                color="rgba(255, 255, 255, 0.2)"
                pos="absolute"
              >
                EZEQUIAS ROCHA
              </Text>
              <Box
                w="77%"
                h="130px"
                ml="auto"
                bg="rgba(255, 255, 255, 0.031)"
              />
            </Flex>
          </Stack>
        </DrawerContent>
      </Drawer>
    </>
  );
}
