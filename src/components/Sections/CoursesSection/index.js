import { Section } from "components/Section";
import vetorial from "assets/images/SectionImages/vetorial.png";
import { Card } from "components/Card";

export function CoursesSection() {
  return (
    <Section title="Cursos" alignItems="center">
      <Card
        image={vetorial.src}
        type="resume-content"
        height={{ base: "110px", lg: "200px" }}
      />
    </Section>
  );
}
