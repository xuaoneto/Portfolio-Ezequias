import { Section } from "components/Section";
import vetorial from "assets/images/SectionImages/vetorial.png";
import { Card } from "components/Card";
import { CardButton } from "components/UI/buttons/CardButton";
import { Link } from "@chakra-ui/react";

export function CoursesSection() {
  return (
    <Section title="Cursos" alignItems="center">
      <Card
        image={vetorial.src}
        type="resume-content"
        height={{ base: "110px", lg: "200px" }}
        extra={
          <CardButton
            as={Link}
            target="_blank"
            ml="20px"
            href="https://www.udemy.com/course/curso-de-desenho-vetorial-com-inkscape/learn/lecture/31062278"
          >
            Ver Curso
          </CardButton>
        }
      />
    </Section>
  );
}
