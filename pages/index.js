import Head from "next/head";
import { Box, Grid } from "@chakra-ui/react";
import { SideBar } from "../src/components/SideBar";
import { VideoSection } from "../src/components/VideoSection";
import { Apresentation } from "../src/components/Apresentation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ezequias Rocha</title>
        <meta name="description" content="Ezequias Rocha Portifólio" />
      </Head>
      <Grid gridTemplateColumns="80px auto" w="100%">
        <SideBar />
        <VideoSection>
          <Apresentation />
        </VideoSection>
      </Grid>
    </>
  );
}
