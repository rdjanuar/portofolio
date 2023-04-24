import { Box, Container, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../footer";
import { Header } from "../headers";
import { Navbar } from "../navbar";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const bg = useColorModeValue("white", "#18181B");
  return (
    <Box bg={bg} h="100vh" overflowY="auto" overflowX="hidden">
      <Container maxH="100vh" maxW="container.sm" pt={4}>
        <Flex flexDir="column" gap={3}>
          <Header />
          <Navbar />
          {children}
          <Footer />
        </Flex>
      </Container>
    </Box>
  );
};
