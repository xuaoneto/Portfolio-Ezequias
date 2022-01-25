import { Text } from "@chakra-ui/react";
import { BIIcon } from "components/UI/icons/bi-icon";
import { ConsultancyIcon } from "components/UI/icons/consultancy-icon";
import { ProgrammingIcon } from "components/UI/icons/programming-icon";

export const ServicesArray = [
  {
    title: (
      <Text fontSize={{ base: "13", md: "15", xl: "20px" }}>
        Consultoria em Gestão Ágil
      </Text>
    ),
    icon: <ConsultancyIcon size="50%" />,
  },
  {
    title: (
      <Text fontSize={{ base: "13", md: "15", xl: "20px" }}>
        Construção de solução em Business Intelligence
      </Text>
    ),
    icon: <BIIcon size="50%" />,
  },
  {
    title: (
      <Text fontSize={{ base: "13", md: "15", xl: "20px" }}>
        Desenvolvimento Backend Python/.NET
      </Text>
    ),
    icon: <ProgrammingIcon size="50%" />,
  },
];
