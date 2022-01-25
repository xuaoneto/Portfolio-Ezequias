import { Flex, Grid, Stack, Text } from "@chakra-ui/react";
import { Section } from "components/Section";
import { ServiceCard } from "components/ServiceCard";
import { Zoom } from "react-reveal";
import { ServicesArray } from "./services-array";

export function ServicesSection() {
  return (
    <Section title="Serviços" id="ServicesSection" alignItems="center">
      <Stack
        w={{ base: "90%", md: "70%" }}
        bg="white"
        p="30px 30px 40px 30px"
        boxShadow="0 0 20px rgba(0,0,0, 0.2)"
        _hover={{ boxShadow: "0 0 20px rgba(0,0,0, 0.4)" }}
        transition="box-shadow .4s"
        borderRadius="5px"
      >
        <Text fontSize="25px">
          Transforme suas ideias em{" "}
          <Text as="span" color="#fac921">
            realidade
          </Text>
        </Text>
        <Grid
          mt="50px!important"
          templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
          gap="20px"
        >
          {ServicesArray.map((item, index) => {
            return (
              <Zoom delay={index * 100} key={`ServiceCard-${index}`}>
                <ServiceCard icon={item.icon} bg="#2D2D32" color="white">
                  {item.title}
                </ServiceCard>
              </Zoom>
            );
          })}
        </Grid>
      </Stack>
    </Section>
  );
}
