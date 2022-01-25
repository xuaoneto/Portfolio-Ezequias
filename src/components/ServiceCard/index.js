import { Box, Stack, Text } from "@chakra-ui/react";

export function ServiceCard({ icon, children, ...rest }) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      borderRadius="12px"
      h="100%"
      w="100%"
      spacing="20px"
      p={{ base: "20px", lg: "35px" }}
      boxShadow="0 0 20px rgba(0,0,0, 0.2)"
      _hover={{ boxShadow: "0 0 20px rgba(0,0,0, 0.4)" }}
      transition="box-shadow .4s"
      {...rest}
    >
      {icon}
      {children}
    </Stack>
  );
}
