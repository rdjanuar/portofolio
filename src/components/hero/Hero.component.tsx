import React from "react";
import heroImage from "../../assets/hero2.png";

import {
  Flex,
  Text,
  Button,
  Img,
  VStack,
  HStack,
  Stack,
} from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={["center", "center", "space-around"]}
      flexDirection={["column", "column", "row"]}
    >
      <Img
        src={heroImage}
        alt={"hero-image"}
        w={["350px", "545px", "545px"]}
        h={["350px", "444px", "444px"]}
        transform={["translateX(-2rem)", null, null]}
        objectFit={"cover"}
      />
      <VStack
        alignItems={["center", "center", "start"]}
        w={"550px"}
        gap={5}
        transform={"translateY(3rem)"}
      >
        <Text
          fontWeight={"semibold"}
          fontSize={["bodyBase", "bodyLarge", "bodyXl"]}
          lineHeight={{ sm: "bodyLarge", lg: "58.09px" }}
          color={"base.secondary.500"}
        >
          Manajemen Sekolah Jadi{" "}
          <span style={{ color: "#6F94D1" }}>Lebih Mudah!</span>
        </Text>
        <Text
          fontWeight={"medium"}
          w={["259px", "369px", "100%"]}
          color={"neutral.40"}
          fontSize={["bodySmall", "bodyBase", "bodyLarge"]}
          lineHeight={"bodyBases"}
        >
          Rasakan kenyamanan dan kemudahan dalam mengelola seluruh proses
          operasional sekolah...
        </Text>
        <HStack spacing={4}>
          <Button
            size={["secondary", "primary", "primary"]}
            textColor={"white"}
            bg={"#5D5EE7"}
          >
            Demo Aplikasi
          </Button>
          <Button
            size={["secondary", "primary", "primary"]}
            bg={"#C7D2FE"}
            textColor={"base.secondary.500"}
          >
            Download Brosur
          </Button>
        </HStack>
      </VStack>
    </Flex>
  );
};
