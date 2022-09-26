import React from "react";
import {
  Button,
  Flex,
  Stack,
  Text,
  Img,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Link,
  useDisclosure,
} from "@chakra-ui/react";

import hamburgerMenu from "../../assets/hamburger.png";

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
      <Stack direction="row" alignItems="center" spacing={2}>
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 36.75L19.6665 21.4725L26.25 10.5L40.25 36.75H28ZM14 17.5L24.5 36.75H3.5L14 17.5ZM9.625 14C8.46468 14 7.35188 13.5391 6.53141 12.7186C5.71094 11.8981 5.25 10.7853 5.25 9.625C5.25 8.46468 5.71094 7.35188 6.53141 6.53141C7.35188 5.71094 8.46468 5.25 9.625 5.25C10.7853 5.25 11.8981 5.71094 12.7186 6.53141C13.5391 7.35188 14 8.46468 14 9.625C14 10.7853 13.5391 11.8981 12.7186 12.7186C11.8981 13.5391 10.7853 14 9.625 14Z"
            fill="#0453EF"
          />
        </svg>
        <Text
          w="50%"
          lineHeight="bodyBase"
          fontWeight="semibold"
          textTransform="uppercase"
        >
          Berani Sekolah
        </Text>
      </Stack>
      <Stack
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
            opacity: 0,
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
            opacity: 0,
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
      </Stack>
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
