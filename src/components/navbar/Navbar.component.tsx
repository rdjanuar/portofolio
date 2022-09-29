import React from "react";
import {
  Button,
  Flex,
  Text,
  Img,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Link,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";

import hamburgerMenu from "../../assets/hamburger.png";
import mainLogo from "../../assets/mainLogo.png";

export const Navbar = ({ offset }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      justifyContent={{
        xl: "space-between",
        "2xl": "space-around",
        base: "space-around",
      }}
      px={{
        xl: "32",
        "2xl": "7.3rem",
      }}
      py="4"
      zIndex="sticky"
      alignContent="center"
      position="fixed"
      bg="white"
      w="full"
      maxW="1920px"
      textColor="base.secondary.500"
      shadow={`${offset ? "md" : ""}`}
      fontSize="14px"
    >
      <HStack spacing={2}>
        <Img src={mainLogo} w="38px" h="52px" objectFit="cover" />
        <Text
          w="50%"
          lineHeight="21px"
          fontWeight="bold"
          fontFamily="heading"
          color="#04032D"
        >
          Takut Sekolah
        </Text>
      </HStack>
      <HStack
        fontWeight="semibold"
        lineHeight="bodyBase"
        direction="row"
        spacing="7"
        alignItems="center"
        display={["none", "none", "none", "flex"]}
        pos="relative"
      >
        <Link
          as="a"
          href="#about"
          style={{
            textDecoration: "none",
          }}
          _after={{
            content: `""`,
            position: "absolute",
            bg: "base.primary.500",
            width: "3.62rem",
            height: "2px",
            rounded: "full",
            top: 10,
            left: 4,
            opacity: `${offset > 639 && offset < 1094 ? "1" : "0"}`,
            transitionDuration: "ultra-slow",
            transitionProperty: "opacity",
            transitionTimingFunction: "ease-in-out",
          }}
          _hover={{
            _after: {
              opacity: 1,
              transitionDuration: "ultra-slow",
              transitionProperty: "opacity",
              transitionTimingFunction: "ease-in-out",
            },
          }}
        >
          Tentang Kami
        </Link>
        <Link
          as="a"
          href="#layanan"
          style={{
            textDecoration: "none",
          }}
          _after={{
            content: `""`,
            position: "absolute",
            bg: "base.primary.500",
            width: "2.2rem",
            height: "2px",
            rounded: "full",
            top: 10,
            left: 32,
            opacity: `${offset >= 1094 ? "1" : "0"}`,
            transitionDuration: "ultra-slow",
            transitionProperty: "opacity",
            transitionTimingFunction: "ease-in-out",
          }}
          _hover={{
            _after: {
              opacity: 1,
              transitionDuration: "ultra-slow",
              transitionProperty: "opacity",
              transitionTimingFunction: "ease-in-out",
            },
          }}
        >
          Layanan
        </Link>
        <Link
          as="a"
          href="#about"
          style={{
            textDecoration: "none",
          }}
          _after={{
            content: `""`,
            position: "absolute",
            bg: "base.primary.500",
            width: "2rem",
            height: "2px",
            rounded: "full",
            top: 10,
            right: "10.2rem",
            opacity: 0,
            transitionDuration: "slower",
            transitionProperty: "opacity",
            transitionTimingFunction: "ease-in-out",
          }}
          _hover={{
            _after: {
              opacity: 1,
              transitionDuration: "slow",
              transitionProperty: "opacity",
              transitionTimingFunction: "ease-in-out",
            },
          }}
        >
          Kontak
        </Link>
        <Button
          colorScheme="functional.secondary"
          size="primary"
          fontSize="14px"
          fontWeight="bold"
          width="128px"
          textColor="base.secondary.500"
          _hover={{
            bg: "#FFF27B",
          }}
        >
          Daftar
        </Button>
      </HStack>
      <Img
        src={hamburgerMenu}
        cursor="pointer"
        display={["block", "block", "block", "none"]}
        onClick={onOpen}
      />
      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
