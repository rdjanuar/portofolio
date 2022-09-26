import React from "react";
import { Flex, Text, Button, Img, VStack, HStack } from "@chakra-ui/react";
import heroImage from "../../assets/hero2.png";

export const Hero = () => (
  <Flex
    alignItems="center"
    justifyContent={{
      xl: "space-between",
      "2xl": "space-around",
      base: "space-around",
    }}
    h="100vh"
    mx={{
      lg: "4.5rem",
      xl: "1.5rem",
      "2xl": "10.4rem",
    }}
    flexDirection={["column", "column", "column", "row"]}
  >
    <Img
      src={heroImage}
      alt="hero-image"
      w={["350px", "545px", "545px"]}
      h={["300px", "444px", "444px"]}
      transform="auto"
      translateX={{
        base: "-8%",
        xl: "0rem",
        "2xl": "0.44rem",
      }}
      translateY={{
        lg: "-2.5rem",
      }}
      objectFit="cover"
    />
    <VStack
      alignItems="start"
      w={{
        lg: "550px",
      }}
      gap={5}
      transform="auto"
      translateX={{
        base: "0.4rem",
        lg: "-0.05rem",
        "2xl": "-0.55rem",
      }}
    >
      <Text
        fontWeight="semibold"
        fontSize={{
          base: "bodyBase",
          sm: "bodyLarge",
          lg: "heading",
          xl: "bodyXl",
        }}
        lineHeight={{ sm: "bodyLarge", lg: "heading", xl: "58.09px" }}
        color="base.secondary.500"
      >
        Manajemen Sekolah Jadi{" "}
        <span style={{ color: "#0453EF" }}>Lebih Mudah!</span>
      </Text>
      <Text
        fontWeight="medium"
        w={{ base: "295px", sm: "369px", lg: "100%" }}
        color="neutral.40"
        fontSize={["bodySmall", "bodyBase", "bodyLarge"]}
        lineHeight={["bodySmall", "bodyBase", "bodyLarge"]}
      >
        Rasakan kenyamanan dan kemudahan dalam mengelola seluruh proses
        operasional sekolah...
      </Text>
      <HStack spacing={4}>
        <Button
          size={["secondary", "primary", "primary"]}
          textColor="white"
          colorScheme="base.primary"
          _hover={{
            bg: "#023AA9",
          }}
        >
          Demo Aplikasi
        </Button>
        <Button
          size={["secondary", "primary", "primary"]}
          colorScheme="base.quaternary"
          textColor="base.secondary.500"
          _hover={{
            bg: "#E1E7FF",
          }}
        >
          Download Brosur
        </Button>
      </HStack>
    </VStack>
  </Flex>
);
