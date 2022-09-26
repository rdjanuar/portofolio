import React from "react";
import { Flex, Text, Img, VStack, Box } from "@chakra-ui/react";

import dashboard from "../../assets/dashboard.png";

export const Main = () => (
  <Flex justifyContent="space-between" alignItems="center" id="about">
    <VStack alignItems="start" transform="translateX(9.25rem)">
      <Text fontSize="heading" fontWeight="semibold" color="base.primary.500">
        APA ITU BERANI SEKOLAH?
      </Text>
      <Text
        fontSize="bodyBase"
        fontWeight="medium"
        color="base.secondary.500"
        lineHeight="25px"
        w="450px"
      >
        <span style={{ color: "#6F94D1" }}>BERANI SEKOLAH </span>
        adalah sebuah aplikasi yang mengintegrasikan proses-proses bisnis pada
        kegiatan harian sekolah yang meliputi perencanaan kegiatan belajar,
        proses kegiatan belajar-mengajar, laporan penilaian & kegiatan siswa,
        sistem keuangan sekolah, pendaftaran online, executive dashboard,
        aplikasi wali murid & aplikasi siswa dalam satu lingkungan aplikasi...
      </Text>
    </VStack>
    <Box
      position="relative"
      _after={{
        content: `""`,
        position: "absolute",
        top: 28,
        left: -2.5,
        bg: "#F5F6FF",
        w: "100vh",
        h: "350px",
        zIndex: -1,
      }}
      mt={2}
    >
      <Img src={dashboard} objectFit="contain" w="625px" h="445px" mt={24} />
    </Box>
  </Flex>
);
