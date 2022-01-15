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
import React from "react";

export function SideMenu({ isOpen, onClose, btnRef }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay backdropFilter="blur(16px)" />

      <DrawerContent minWidth={{ md: "480px" }} bgColor="#252425">
        <Stack
          justifyContent="space-between"
          h="100%"
          overflow="auto"
          padding={{ base: "50px 0 0 0", md: "25% 0 0 80px" }}
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
                  />
                );
              })}
            </Stack>
          </Box>
          <Flex flex="auto" alignItems="end">
            <Text
              whiteSpace="nowrap"
              transform={{
                base: "rotate(-90deg) translateY(-70px) translateX(120px)",
                md: "rotate(-90deg) translateY(-120px) translateX(160px)",
              }}
              fontSize={{ base: "30", md: "45" }}
              color="rgba(255, 255, 255, 0.2)"
              pos="absolute"
            >
              EZEQUIAS ROCHA
            </Text>
            <Box
              w="77%"
              h={{ base: "90px", md: "130px" }}
              ml="auto"
              bg="rgba(255, 255, 255, 0.031)"
            />
          </Flex>
        </Stack>
      </DrawerContent>
    </Drawer>
  );
}
