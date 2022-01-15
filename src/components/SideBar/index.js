import { Box, Stack, Image, useDisclosure } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/images/logo.svg";
import { HumbMenu } from "../HumbMenu";
import { SocialIcons } from "components/SocialIcons";
import { useApplicationContext } from "contexts/ApplicationContext";
import { SideMenu } from "components/SideMenu";

export function SideBar({ ...rest }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();
  const { base, sm } = useApplicationContext();
  return (
    <>
      {base || sm ? (
        <HumbMenu
          toggle={isOpen}
          onToggle={onOpen}
          offToggle={onClose}
          title="Menu"
          pos="absolute"
          top="10px"
          left="10px"
          zIndex="99999"
          bg={isOpen ? null : "rgba(44, 45, 50, 0.5)"}
          mt="0"
          pt="15px"
          pb="12px"
          px="10px"
          w="auto"
          borderRadius="3px"
        />
      ) : (
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
            <Image mx="auto" w="30px" alt="logo" mt="25px" src={logo.src} />
            <HumbMenu
              toggle={isOpen}
              onToggle={onOpen}
              offToggle={onClose}
              title="Menu"
            />
          </Box>
          <Stack alignItems="center" spacing="20px" mb="25px !important">
            <SocialIcons />
          </Stack>
        </Stack>
      )}
      <SideMenu isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </>
  );
}
