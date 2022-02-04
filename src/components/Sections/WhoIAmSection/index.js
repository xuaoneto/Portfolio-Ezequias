import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import { Section } from "components/Section";
import perfil from "assets/images/SectionImages/perfil-image.jpeg";

export default function WhoIAm() {
  return (
    <Section alignItems="center">
      <Stack
        mt="100px"
        p="0 30px 40px 30px"
        w={{ base: "90%", md: "70%", "2xl": "50%" }}
        bg="#2D2D32"
        borderRadius="5px"
        boxShadow="0 0 20px rgba(0,0,0, 0.2)"
        alignItems="center"
        color="white"
        textAlign="center"
        transition="box-shadow .4s"
        _hover={{ boxShadow: "0 0 20px rgb(0 0 0 / 40%)" }}
      >
        <Box
          bgImage={perfil.src}
          boxShadow="0 0 20px rgba(0,0,0, 0.2)"
          borderRadius="50%"
          w={{ base: "50%", md: "35%", xl: "25%" }}
          bgPos="center"
          bgSize="cover"
          pb={{ base: "50%", md: "35%", xl: "25%" }}
          mt={{ base: "-25%", md: "-17.5%", xl: "-12.5%" }}
        />
        <Grid w="100%" mt="25px!important" templateColumns="auto auto auto">
          <Box h="2px" bg="white" my="auto" />
          <Text
            fontSize="25"
            p="0px 10px"
            borderRadius="6px"
            border="2px solid rgba(255,255,255, 0.4)"
            bg="rgba(255, 255, 255, 0.031 )"
          >
            Ezequias Rocha
          </Text>
          <Box h="2px" bg="white" my="auto" />
        </Grid>

        <Text fontSize={{ base: "28", md: "40px" }} mb="20px">
          Quem sou eu:
        </Text>
        <Text fontSize={{ base: "18" }} p={{ base: "0", md: "0 30px" }}>
          Profissional em TI com extensa experiência em aumentar a produtividade
          através da análise e disponibilização de processos de negócio em
          Utilities, reduzindo lacunas geradas por uma ideia de construção
          rápida através soluções focadas na construção de um relacionamento
          forte com o cliente em todos os níveis da organização. Como um
          indivíduo altamente motivado, meu objetivo é trabalhar de modo efetivo
          e participativo na entrega de projetos e soluções enquanto mantenho o
          foco nos recursos, cronogramas e na qualidade. Sou uma pessoa
          detalhista possuindo uma boa experiência em negócios, processos
          técnicos e metodologias.
          <br />
          <br />
          Especialidades: Sistemas de Informações Geográficas, Programação,
          Metodologia Ágil
        </Text>
      </Stack>
    </Section>
  );
}
