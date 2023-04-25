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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          mollitia!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus at rem
          voluptate et incidunt accusantium officiis quibusdam molestiae facilis
          ad!
        </Text>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
          perferendis totam necessitatibus dolorum quisquam quos cum quibusdam
          ipsa hic culpa. Nostrum suscipit aperiam sed. Ut tenetur omnis modi
          amet quod!
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
