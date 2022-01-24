import { Section } from "components/Section";
import portfolio from "assets/images/SectionImages/portfolio.jpg";
import { Card } from "components/Card";

export function PortfolioSection() {
  return (
    <Section title="Portfólio" id="PortfolioSection" alignItems="center">
      <Card
        image={portfolio.src}
        type="resume-content"
        height={{ base: "110px", lg: "200px" }}
      />
    </Section>
  );
}
