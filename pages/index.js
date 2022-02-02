import Head from "next/head";
import { Box, Grid } from "@chakra-ui/react";
import { SideBar } from "components/SideBar";
import { VideoSection } from "components/VideoSection";
import { Apresentation } from "components/Apresentation";
import { useApplicationContext } from "contexts/ApplicationContext";
import { NavBar } from "components/NavBar";
import { Footer } from "components/Footer";
import { ExperienceSectionCards } from "components/Sections/ExperienceSectionCards";
import { PortfolioSection } from "components/Sections/PortfolioSection";
import { CoursesSection } from "components/Sections/CoursesSection";
import { GithubSection } from "components/Sections/GithubSection";
import { Background } from "components/Background";
import React, { useRef } from "react";
import WhoIAm from "components/Sections/WhoIAmSection";
import { ServicesSection } from "components/Sections/ServicesSection";
import { BlogSection } from "components/Sections/BlogSection";
import axios from "axios";

export default function Home() {
  const { isMobile } = useApplicationContext();
  const refBg = useRef(null);
  const handleScrollTo = (id) => (event) => {
    event.preventDefault();
    const element = document.querySelector(id);
    const rect = element.getBoundingClientRect();
    window.scrollBy({
      top: rect.top - 140,
      left: 0,
      behavior: "smooth",
    });
  };

  if (isMobile === undefined) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Ezequias Rocha</title>
        <meta name="description" content="Ezequias Rocha Portfólio" />
      </Head>

      <Grid
        gridTemplateColumns={{ base: "1fr", md: "80px auto" }}
        w="100%"
        pos="relative"
        bg="#2c2d32"
      >
        <SideBar />
        <Box>
          <VideoSection>
            <Apresentation handleScrollTo={handleScrollTo} />
            <NavBar handleScrollTo={handleScrollTo} />
          </VideoSection>
          <Box
            w="100%"
            backgroundColor="white"
            zIndex="1"
            pos="relative"
            ref={refBg}
            overflow="hidden"
            pb="50px"
          >
            <Background reference={refBg} />
            <WhoIAm />
            <PortfolioSection />
            <CoursesSection />
            <GithubSection />
            <ExperienceSectionCards />
            <ServicesSection />
            <BlogSection />
          </Box>
          <Footer />
        </Box>
      </Grid>
    </>
  );
}
