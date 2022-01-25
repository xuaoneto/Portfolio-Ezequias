import { Grid } from "@chakra-ui/react";
import { JobCardArray } from "./job-card-array";
import { Card } from "components/Card";
import { Section } from "components/Section";
import { Fade } from "react-reveal";

export function ExperienceSectionCards() {
  return (
    <Section withOutFade title="Experiências de trabalho">
      <Grid
        w={{ base: "90%", md: "70%" }}
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr", xl: "1fr 1fr 1fr" }}
        gap="30px"
        mx="auto!important"
      >
        {JobCardArray.map((item, index) => {
          return (
            <Fade key={`CardEmprego-${index}`}>
              <Card
                title={item.title}
                image={item.image}
                abstract={item.abstract}
                type="job"
                w="100%"
                h="100%"
              />
            </Fade>
          );
        })}
      </Grid>
    </Section>
  );
}
