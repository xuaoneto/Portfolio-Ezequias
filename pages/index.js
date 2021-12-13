import Head from "next/head";
import { Box, Grid } from "@chakra-ui/react";
import { SideBar } from "../src/components/SideBar";
import { VideoSection } from "../src/components/VideoSection";
import { Apresentation } from "../src/components/Apresentation";
import { useApplicationContext } from "../src/contexts/ApplicationContext";

export default function Home() {
  const { isMobile } = useApplicationContext();
  return (
    <>
      <Head>
        <title>Ezequias Rocha</title>
        <meta name="description" content="Ezequias Rocha Portifólio" />
      </Head>
      <Grid
        fontFamily="Titillium Web, sans-serif"
        gridTemplateColumns={{ base: "auto", md: "80px auto" }}
        w="100%"
      >
        <SideBar display={{ base: "none", md: "flex" }} />
        <VideoSection>
          <Apresentation />
        </VideoSection>
      </Grid>
    </>
  );
}
