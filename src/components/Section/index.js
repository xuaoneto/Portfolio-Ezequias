import { Box, Stack, Text } from "@chakra-ui/react";

export function Section({ title, children, ...rest }) {
  return (
    <Stack w="100%" pt="30px" {...rest}>
      <Text textAlign="center" fontSize={{ base: "28", md: "40px" }} mb="30px">
        {title}
      </Text>
      {children}
    </Stack>
  );
}
