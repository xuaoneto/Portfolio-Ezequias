import { Link, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { Section } from "components/Section";
import { useEffect, useState } from "react";

export function BlogSection() {
  const [postsMedium, setPostsMedium] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://ezequiasrocha.medium.com/feed"
      )
      .then((response) => {
        setPostsMedium(response.data.items);
      });
  }, []);

  return (
    <>
      {postsMedium ? (
        <Section title="Posts Medium" id="#BlogSection" alignItems="center">
          <Stack
            w={{ base: "90%", md: "70%" }}
            bg="white"
            maxH="500px"
            overflow="auto"
            p="20px"
            boxShadow="0 0 20px rgba(0,0,0, 0.2)"
            _hover={{ boxShadow: "0 0 20px rgba(0,0,0, 0.4)" }}
            transition="box-shadow .4s"
            borderRadius="5px"
          >
            <Stack w="100%" spacing="10px">
              {postsMedium.map((item, index) => {
                return (
                  <Link
                    display="flex"
                    key={`post-${index}`}
                    w="100%"
                    bg="#2D2D32"
                    p="20px 15px"
                    borderRadius="7px"
                    transition="all .3s"
                    color="white"
                    _hover={{ color: "#fac921" }}
                    href={item.link}
                    target="_blank"
                  >
                    <Text>{item.title}</Text>
                  </Link>
                );
              })}
            </Stack>
          </Stack>
        </Section>
      ) : null}
    </>
  );
}
