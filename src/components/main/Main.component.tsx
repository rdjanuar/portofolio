import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Flex, Text, Img, VStack } from "@chakra-ui/react";

import dashboard from "../../assets/dashboard.png";

export const Main = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Flex justifyContent="space-between" alignItems="center" id="about">
      <VStack
        alignItems="start"
        transform={{ xl: "translateX(8.1rem)", "2xl": "translateX(88.5%)" }}
      >
        <Text
          fontSize="heading"
          fontWeight="semibold"
          color="base.secondary.500"
        >
          APA ITU TAKUT SEKOLAH?
        </Text>
        <Text
          fontSize="14px"
          fontWeight="medium"
          color="base.secondary.500"
          lineHeight="25px"
          w="450px"
        >
          <span style={{ color: "#0453EF" }}>TAKUT SEKOLAH </span>
          adalah sebuah aplikasi yang mengintegrasikan proses-proses bisnis pada
          kegiatan harian sekolah yang meliputi perencanaan kegiatan belajar,
          proses kegiatan belajar-mengajar, laporan penilaian & kegiatan siswa,
          sistem keuangan sekolah, pendaftaran online, executive dashboard,
          aplikasi wali murid & aplikasi siswa dalam satu lingkungan aplikasi...
        </Text>
      </VStack>

      <Img
        src={dashboard}
        ref={ref}
        transform={isInView ? "translateX(0)" : "translateX(100%)"}
        transition="all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
        opacity={isInView ? 1 : 0}
        objectFit="contain"
        w={{ xl: "625px", "2xl": "813px" }}
        h={{ xl: "445px", "2xl": "100%" }}
        mt={24}
        dropShadow="0px 4px 15px 0px rgba(0,0,0,0.1)"
      />
    </Flex>
  );
};
