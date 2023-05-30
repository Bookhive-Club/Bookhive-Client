import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";

const ContainerLayout = ({ children }: { children: ReactNode }) => {
  return <Container maxW={["100%", "100%", "85%"]}>{children}</Container>;
};
export default ContainerLayout;
