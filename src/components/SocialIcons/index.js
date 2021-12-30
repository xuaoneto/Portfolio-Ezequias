import React from "react";
import { Link, Image } from "@chakra-ui/react";
import medium from "../../assets/images/medium.svg";
import instagram from "../../assets/images/instagram.svg";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";

export function SocialIcons({ size = "24px" }) {
  return (
    <>
      <Link
        href="https://github.com/ezequias"
        target="_blank"
        transition="transform .3s"
        _hover={{ transform: "scale(1.3)" }}
      >
        <Image alt="GitHub" w={size} src={github.src} />
      </Link>
      <Link
        href="https://ezequiasrocha.medium.com/"
        target="_blank"
        transition="transform .3s"
        _hover={{ transform: "scale(1.3)" }}
      >
        <Image alt="Medium" w={size} src={medium.src} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/ezequiasrocha/"
        target="_blank"
        transition="transform .3s"
        _hover={{ transform: "scale(1.3)" }}
      >
        <Image alt="Linkedin" w={size} src={linkedin.src} />
      </Link>
      <Link
        href="https://www.instagram.com/ezequias/"
        target="_blank"
        transition="transform .3s"
        _hover={{ transform: "scale(1.3)" }}
      >
        <Image alt="Instagram" w={size} src={instagram.src} />
      </Link>
    </>
  );
}
