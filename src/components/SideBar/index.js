import { Box, Stack, Image, Link } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/images/logo.svg";
import medium from "../../assets/images/medium.svg";
import instagram from "../../assets/images/instagram.svg";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import { HumbMenu } from "../HumbMenu";

export function SideBar() {
  const [menuOpen, setToggle] = React.useState(false);
  return (
    <Stack
      w="80px"
      h="100vh"
      pos="sticky"
      boxShadow="0 0 1em black"
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
    >
      <Box>
        <Image mx="auto" w="30px" mt="25px" src={logo.src} />
        <HumbMenu toggle={menuOpen} setToggle={setToggle} title="Menu" />
      </Box>
      <Stack alignItems="center" spacing="20px" mb="25px !important">
        <Link
          href="#"
          transition="transform .3s"
          _hover={{ transform: "scale(1.3)" }}
        >
          <Image w="24px" src={github.src} />
        </Link>
        <Link
          href="#"
          transition="transform .3s"
          _hover={{ transform: "scale(1.3)" }}
        >
          <Image w="24px" src={medium.src} />
        </Link>
        <Link
          href="#"
          transition="transform .3s"
          _hover={{ transform: "scale(1.3)" }}
        >
          <Image w="24px" src={linkedin.src} />
        </Link>
        <Link
          href="#"
          transition="transform .3s"
          _hover={{ transform: "scale(1.3)" }}
        >
          <Image w="24px" src={instagram.src} />
        </Link>
      </Stack>
    </Stack>
  );
}
