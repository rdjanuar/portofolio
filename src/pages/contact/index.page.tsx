/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Box,
  HStack,
  Heading,
  VStack,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";

import githubUniversal from "~/assets/images/githubUniversal.svg";
import gmail from "~/assets/images/gmail.svg";
import linkedin from "~/assets/images/linkedin.svg";

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
        <VStack align="start" spacing={4}>
          <HStack>
            <Image
              src={gmail.src as string}
              width={gmail.width as number}
              height={gmail.height as number}
              alt="gmail"
            />
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
            <Image
              src={linkedin.src as string}
              width={32}
              height={32}
              alt="linkedin"
            />
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
            <Image
              src={githubUniversal.src as string}
              width={32}
              height={32}
              alt="github"
            />
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
