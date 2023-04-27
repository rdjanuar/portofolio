import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Tag,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";

const data = [
  {
    id: 1,
    title: "School Management System",
    href: "#",
    desc: "Application intended to provide convenience and comfort in managing school operational data.",
    tag: ["React JS", "React Query", "Chakra UI", "Zustand"],
  },
  {
    id: 2,
    title: "Dashboard Berani Sekolah",
    href: "#",
    desc: "Dashboard intended to manage school management system application demo requests",
    tag: ["React JS", "React Query", "Chakra UI", "Context"],
  },
  {
    id: 3,
    title: "Landing Page Berani Sekolah",
    href: "#",
    desc: "Introduction of daring school products and student facilities for the PPDB process",
    tag: ["React JS", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    id: 4,
    title: "Sistak",
    href: "https://sistak.whalez.tech/",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, fugit!    ",
    tag: ["Next JS", "Typescript", "React Query", "Zustand", "Chakra UI"],
  },
  {
    id: 5,
    title: "Sistak PWA",
    href: "https://sistak-pwa.whalez.tech/",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, fugit!    ",
    tag: ["Next JS", "Typescript", "React Query", "Context", "Chakra UI"],
  },
  {
    id: 6,
    title: "Finmod",
    desc: "Accounting application for projecting business valuation for the next 5 years",
    tag: ["React JS", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    id: 7,
    title: "Mini Gold Scanner",
    href: "https://play.google.com/store/search?q=minigold%20scanner&c=apps&hl=en",
    desc: "Application to scan the authenticity of gold products that are already in circulation",
    tag: ["React Native", "Expo", "Magnus UI"],
  },
  {
    id: 8,
    title: "OKR Telkom",
    href: "https://tcuokrdashboard.id/",
    desc: "Telkom's internal OKR application to interpret and track desired goals and their achievements",
    tag: [
      "Next JS",
      "Typescript",
      "React Query",
      "Zustand",
      "Chakra UI",
      "Casbin",
    ],
  },
];

const Projects = () => {
  const bgCard = useColorModeValue("white", "blackAlpha.500");
  const bgTag = useColorModeValue("bisque", "black");
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Portofolio - Rizky Djanuar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading textAlign="center" my={10} fontSize="32px" fontWeight="medium">
        My Projects
      </Heading>
      <SimpleGrid
        spacing={3}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {data.map((val) => (
          <Card
            as="a"
            href={val.href}
            target={val.href === "#" ? "_self" : "_blank"}
            key={val.id}
            bg={bgCard}
          >
            <CardHeader>
              <Image
                alt="project-image"
                w="full"
                h="full"
                objectFit="cover"
                src="https://dummyimage.com/300x300/000/fff"
                rounded="sm"
              />
            </CardHeader>
            <CardBody>
              <VStack align="start">
                <Heading size="md">{val.title}</Heading>
                <Text fontSize="14px">{val.desc}</Text>
              </VStack>
            </CardBody>
            <CardFooter>
              <Flex gap={2} flexWrap="wrap">
                {val.tag.map((val, idx) => (
                  <Tag key={idx} bg={bgTag} fontWeight="medium" fontSize="9px">
                    {val}
                  </Tag>
                ))}
              </Flex>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Projects;
