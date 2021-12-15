import { Stack, Text } from "@chakra-ui/react";
import React from "react";

export function VideoSection({ children }) {
  const playerRef = React.useRef();
  return (
    <Stack
      justifyContent="space-between"
      position="relative"
      w={{ base: "100%", md: "calc(100% + 80px)" }}
      ml={{ base: "0", md: "-80px" }}
      h="100vh"
    >
      {children}
      <video
        ref={playerRef}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "fixed",
          zIndex: "-1",
          margin: "0",
        }}
        className="videoTag"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/drinkscoffee.mp4" type="video/mp4" />
      </video>
    </Stack>
  );
}
