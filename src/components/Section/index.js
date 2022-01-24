import { Box, Stack, Text } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";

export function Section({ title, children, ...rest }) {
  return (
    <Fade>
      <Stack w="100%" pt="30px" {...rest}>
        {title ? (
          <Text
            textAlign="center"
            fontSize={{ base: "28", md: "40px" }}
            mb="30px"
          >
            {title}
          </Text>
        ) : null}
        {children}
      </Stack>
    </Fade>
  );
}
