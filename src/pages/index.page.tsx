import { Heading, Text, VStack, chakra } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Portofolio - Rizky Djanuar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading textAlign="center" my={10} fontSize="32px" fontWeight="medium">
        Hi, Kijan here!
      </Heading>
      <VStack align="start" spacing={4}>
        <Text>
          Hello, I am a front end developer based in Bandung, West Java
          Indonesia.
        </Text>
        <Text>
          I have an interest in technology, especially in the web field
          development. I am a hard working individual, self learning and not
          never been afraid of new challenges
        </Text>
        <Text>
          I have 1 year experience in front end development using React JS, Next
          JS, React Native and some UI Libraries. With 1 year experience in
          front end development i have been building many applications but most
          of my project is in dashboard
        </Text>
        <Text>
          Want to know more about my projects ? u can visit my collection{" "}
          <Link href="/projects">
            <chakra.span textDecoration="underline" fontWeight="bold">
              here
            </chakra.span>
          </Link>
        </Text>
      </VStack>
    </>
  );
};

export default Home;
