import {
  Box,
  Stack,
  Drawer,
  Flex,
  DrawerOverlay,
  DrawerContent,
  Text,
} from "@chakra-ui/react";
import { MenuItem } from "components/SideBar/menu-item";
import { menuItemsArray } from "components/SideBar/menu-items-array";
import { useApplicationContext } from "contexts/ApplicationContext";
import React from "react";

export function SideMenu({ isOpen, onClose, btnRef }) {
  const [focus, setFocus] = React.useState(false);
  const { base, sm } = useApplicationContext();

  function close(link) {
    onClose();
    setTimeout(() => {
      const element = document.querySelector(link);
      const rect = element.getBoundingClientRect();
      window.scrollBy({
        top: rect.top - 140,
        left: 0,
        behavior: "smooth",
      });
    }, 500);
  }

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay backdropFilter={base || sm ? null : "blur(16px)"} />

      <DrawerContent
        minWidth={{ md: "480px", xl: "420px", "2xl": "480px" }}
        bgColor="#252425"
      >
        <Stack
          justifyContent="space-between"
          h="100%"
          overflow="auto"
          css={{
            "&::-webkit-scrollbar": { width: "2px" },
            "&::-webkit-scrollbar-track": { width: "2px" },
            "&::-webkit-scrollbar-thumb": { background: "#585858" },
            "scrollbar-color": "#585858 transparent",
            "scrollbar-width": "thin",
          }}
          padding={{
            base: "50px 0 0 0",
            md: "25% 0 0 80px",
            xl: "15% 0 0 70px",
            "2xl": "25% 0 0 80px",
          }}
        >
          <Box ml="80px">
            <Flex pos="relative" mb="65px" w="50%">
              <Text color="white" fontSize="30px">
                Menu
              </Text>
            </Flex>
            <Stack spacing="0">
              {menuItemsArray.map((item, index) => {
                return (
                  <MenuItem
                    key={`MenuItem-${index}`}
                    subItems={item.subItems}
                    focus={focus}
                    setFocus={setFocus}
                    itemName={item.name}
                    link={item.link}
                    close={close}
                  />
                );
              })}
            </Stack>
          </Box>
          <Flex flex="auto" alignItems="end" pos="relative">
            <Text
              whiteSpace="nowrap"
              transform={{
                base: "rotate(-90deg) translateY(-70px) translateX(120px)",
                md: "rotate(-90deg) translateY(-120px) translateX(160px)",
                xl: "rotate(-90deg) translateY(-80px) translateX(120px)",
                "2xl": "rotate(-90deg) translateY(-120px) translateX(160px)",
              }}
              fontSize={{ base: "30", md: "45", xl: "35", "2xl": "45" }}
              color="rgba(255, 255, 255, 0.2)"
              pos="absolute"
            >
              EZEQUIAS ROCHA
            </Text>
            <Box
              w="77%"
              h={{ base: "90px", md: "130px", xl: "90px", "2xl": "130px" }}
              ml="auto"
              bg="rgba(255, 255, 255, 0.031)"
            />
          </Flex>
        </Stack>
      </DrawerContent>
    </Drawer>
  );
}
