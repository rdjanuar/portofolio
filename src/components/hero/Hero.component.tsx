import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";

import { Flex, Text, Button, Img, VStack, HStack } from "@chakra-ui/react";
import heroImage from "../../assets/hero2.png";

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ translateY: 20, opacity: 0 }}
      animate={{
        translateY: isInView ? 0 : 30,
        opacity: isInView ? 1 : 0,
      }}
      transition={{ ease: "anticipate", duration: 1 }}
    >
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
          "2xl": "11rem",
        }}
        flexDirection={["column", "column", "column", "row"]}
      >
        <Img
          src={heroImage}
          alt="hero-image"
          w={{ base: "350px", sm: "625px", "2xl": "650px" }}
          h={{ base: "300px", sm: "525px", "2xl": "545px" }}
          transform="auto"
          translateX={{
            base: "-8%",
            xl: "calc(-1rem + -1px)",
            "2xl": "0.5rem",
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
            "2xl": "-2rem",
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
            <span style={{ color: "#0453EF" }}>Lebih Sulit!</span>
          </Text>
          <Text
            fontWeight="medium"
            w={{ base: "295px", sm: "369px", lg: "100%" }}
            color="neutral.40"
            fontSize={["bodySmall", "bodyBase", "bodyLarge"]}
            lineHeight={["bodySmall", "bodyBase", "bodyLarge"]}
          >
            Rasakan ketidaknyamanan dan kesulitan dalam mengelola seluruh proses
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
    </motion.div>
  );
};
