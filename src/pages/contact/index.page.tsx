import { SunIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  Heading,
  VStack,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";

const Contact = () => {
  const hoverTextColor = useColorModeValue("blackAlpha.500", "whiteAlpha.500");
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Portofolio - Rizky Djanuar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading textAlign="center" my={10} fontSize="32px" fontWeight="medium">
        Reach Me!
      </Heading>
      <Box transform="translateX(20%)">
        <VStack align="start">
          <HStack>
            <SunIcon />
            <chakra.a
              _hover={{
                textColor: hoverTextColor,
              }}
              fontSize="16px"
              href="mailto:rdjanuar008@gmail.com"
            >
              rdjanuar008@gmail.com
            </chakra.a>
          </HStack>
          <HStack>
            <SunIcon />
            <chakra.a
              _hover={{
                textColor: hoverTextColor,
              }}
              fontSize="16px"
              href="https://www.linkedin.com/in/rizky-djanuar/"
              target="_blank"
            >
              Rizky Djanuar
            </chakra.a>
          </HStack>
          <HStack>
            <SunIcon />
            <chakra.a
              _hover={{
                textColor: hoverTextColor,
              }}
              fontSize="16px"
              href="https://github.com/rdjanuar"
              target="_blank"
            >
              rdjanuar
            </chakra.a>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Contact;
