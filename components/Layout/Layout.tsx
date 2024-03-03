import { Container, Flex } from "@chakra-ui/react";
import { Background } from "components/Layout";
import { Header, ThemeToggle } from "components/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Background />
      <Container style={{ zIndex: 1 }} maxW="container.md">
        <Flex justify="center" align="center" my={4}>
          <Header />
          <ThemeToggle />
        </Flex>

        {children}
      </Container>
    </>
  );
};

export { Layout };
