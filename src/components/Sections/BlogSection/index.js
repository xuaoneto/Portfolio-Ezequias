import { Link, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { Section } from "components/Section";
import { CardButton } from "components/UI/buttons/CardButton";
import { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { ArrayStaticPosts } from "./array";

export function BlogSection() {
  const [postsMedium, setPostsMedium] = useState();
  const [postsLength, setPostsLength] = useState(20);
  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://ezequiasrocha.medium.com/feed"
      )
      .then((response) => {
        const posts = response.data.items.concat(ArrayStaticPosts);
        const outduplicates = posts.filter((item, index) => {
          const sliced = posts.slice(index + 1, posts.length);
          return (
            sliced.find((element) => {
              return element.title === item.title;
            }) === undefined
          );
        });

        setPostsMedium(outduplicates);
      });
  }, []);
  const pagination = postsMedium?.slice(0, postsLength);
  return (
    <>
      {postsMedium ? (
        <Section title="Posts Medium" id="BlogSection" alignItems="center">
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
              {pagination.map((item, index) => {
                return (
                  <Fade key={`post-${index}`}>
                    <Link
                      display="flex"
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
                  </Fade>
                );
              })}
              {postsLength === postsMedium.length ? null : (
                <CardButton
                  onClick={() =>
                    postsLength < postsMedium.length
                      ? setPostsLength(postsLength + 20)
                      : setPostsLength(postsMedium.length)
                  }
                  mt="0"
                  mb="0"
                >
                  Ver Mais
                </CardButton>
              )}
            </Stack>
          </Stack>
        </Section>
      ) : null}
    </>
  );
}
