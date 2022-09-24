import {
  Button,
  Flex,
  Heading,
  Stack,
  Spacer,
  Link,
  Text,
  Img,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";

import hamburgerMenu from "../../assets/hamburger.png";
import { Dropdown } from "./DropdownNavbar.component.jsx";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(isOpen);

  return (
    <>
      <Flex
        justifyContent={"space-around"}
        mx={"-3.75rem"}
        textColor={"base.secondary.500"}
        fontSize={"bodyBase"}
        pos={"relative"}
        position="static"
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 36.75L19.6665 21.4725L26.25 10.5L40.25 36.75H28ZM14 17.5L24.5 36.75H3.5L14 17.5ZM9.625 14C8.46468 14 7.35188 13.5391 6.53141 12.7186C5.71094 11.8981 5.25 10.7853 5.25 9.625C5.25 8.46468 5.71094 7.35188 6.53141 6.53141C7.35188 5.71094 8.46468 5.25 9.625 5.25C10.7853 5.25 11.8981 5.71094 12.7186 6.53141C13.5391 7.35188 14 8.46468 14 9.625C14 10.7853 13.5391 11.8981 12.7186 12.7186C11.8981 13.5391 10.7853 14 9.625 14Z"
              fill="#1E293B"
            />
          </svg>
          <Text w={"50%"} lineHeight={"bodyBase"} fontWeight={"semibold"}>
            Berani Sekolah
          </Text>
        </Stack>
        <Stack
          fontWeight={"semibold"}
          lineHeight={"bodyBase"}
          direction={"row"}
          spacing={"7"}
          alignItems={"center"}
          display={["none", "none", "flex"]}
        >
          <Link href="#about">Tentang Kami</Link>
          <Text>Layanan</Text>
          <Text>Kontak</Text>
          <Button
            colorScheme={"functional.secondary"}
            size={"primary"}
            fontSize={"bodyBase"}
            fontWeight={"bold"}
            width={"128px"}
            textColor={"base.secondary"}
          >
            Daftar
          </Button>
        </Stack>
        <Img
          src={hamburgerMenu}
          cursor={"pointer"}
          display={["block", "block", "none"]}
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
    </>
  );
};
