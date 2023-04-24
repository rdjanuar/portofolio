import { Heading, Text, VStack } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";

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
        <Text fontSize="16px">
          I am Rizky Djanuar, a front end developer from West Java, Bandung
          Indonesia.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed sint
          ratione tempore autem libero dolorum, consequuntur harum praesentium
          repellendus!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque qui
          quae quaerat iusto commodi perspiciatis consectetur facere fugiat
          officiis sequi, doloremque nisi at dolore, perferendis tenetur illo
          dolor quisquam adipisci.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          fuga dignissimos consectetur aperiam. Debitis assumenda beatae optio
          quod necessitatibus voluptate esse numquam. Necessitatibus labore,
          reiciendis eveniet quidem tempora molestias doloremque rerum qui
          similique veniam perferendis sed blanditiis pariatur obcaecati
          expedita.
        </Text>
      </VStack>
    </>
  );
};

export default Home;
