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
    desc: "Aplikasi yang ditujukan untuk memberikan kemudahan dan kenyamanan dalam mengelola data operasional sekolah.",
    tag: ["React JS", "React Query", "Chakra UI", "Zustand"],
  },
  {
    id: 2,
    title: "Dashboard Berani Sekolah",
    desc: "Dashboard yang ditujukan untuk memanage permintaan demo aplikasi school management system",
    tag: ["React JS", "React Query", "Chakra UI", "Context"],
  },
  {
    id: 3,
    title: "Landing Page Berani Sekolah",
    desc: "Pengenalan produk berani sekolah dan sarana siswa untuk proses PPDB",
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
    desc: "Aplikasi accounting untuk proyeksi valuasi bisnis 5 tahun kedepan ",
    tag: ["React JS", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    id: 7,
    title: "Mini Gold Scanner",
    href: "https://play.google.com/store/search?q=minigold%20scanner&c=apps&hl=en",
    desc: "Aplikasi untuk scan keaslian produk emas yang sudah beredar",
    tag: ["React Native", "Expo", "Magnus UI"],
  },
  {
    id: 8,
    title: "OKR Telkom",
    href: "https://tcuokrdashboard.id/",
    desc: "Aplikasi OKR internal telkom untuk mengartikan dan melacak tujuan yang diinginkan beserta capaiannya",
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
          <Card as="a" href={val.href} target="_blank" key={val.id} bg={bgCard}>
            <CardHeader>
              <Image
                alt="project-image"
                w="full"
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
