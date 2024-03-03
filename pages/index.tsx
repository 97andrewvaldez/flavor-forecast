"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "components/Home";
import { Layout } from "components/Layout";
import { extendTheme } from "@chakra-ui/react";
import colors from "styles/theme.colors";

const theme = extendTheme({ ...colors });

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Home />
      </Layout>
    </ChakraProvider>
  );
}
