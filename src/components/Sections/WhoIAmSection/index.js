import { Box, Flex, Grid, Image, Link, Stack, Text } from "@chakra-ui/react";
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
        <Flex alignItems="start">
          <Image
            src="/circles.png"
            h={{ base: "7.5vh", xl: "7.5vw" }}
            mt={{ base: "-6.505vh", xl: "-6.505vw" }}
            mr="-1vw"
            mb="auto"
            alt=""
          />
          <Box
            bgImage={perfil.src}
            boxShadow="0 0 20px rgba(0,0,0, 0.2)"
            borderRadius="50%"
            w={{ base: "11.1vh", xl: "11.1vw" }}
            h={{ base: "11.1vh", xl: "11.1vw" }}
            mt={{ base: "-5.505vh", xl: "-5.505vw" }}
            mb="25px"
            bgSize="cover"
          />
          <Link
            w={{ base: "7.7664vh", xl: "7.7664vw" }}
            href="https://trailblazer.me/id/ezequiasrocha"
            target="_blank"
            _focus={{}}
          >
            <Image
              src={"/astro.webp"}
              ml={{ base: "-3vh", xl: "-3vw" }}
              h={{ base: "9vh", xl: "9vw" }}
              alt=""
            />
          </Link>
        </Flex>
        <Grid w="100%" templateColumns="auto auto auto">
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
