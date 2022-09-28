import React from "react";
import { Text, Img, Stack, Box, SimpleGrid, Flex } from "@chakra-ui/react";
import smsImage from "../../assets/1.png";
import executiveDashboard from "../../assets/2.png";
import ppdbOnline from "../../assets/3.png";
import keuangan from "../../assets/4.png";
import siswa from "../../assets/5.png";
import walimurid from "../../assets/6.png";

export const Section = () => (
  <>
    <Stack
      direction="column"
      spacing={4}
      mt="28"
      px={{
        xl: "8.1rem",
        "2xl": "24.8rem",
      }}
    >
      <Text
        fontSize="heading"
        color="base.secondary.500"
        fontWeight="semibold"
        lineHeight="heading"
        textTransform="uppercase"
        id="layanan"
      >
        Layanan Kami
      </Text>
      <Text
        fontSize="14px"
        lineHeight="25px"
        color="base.secondary.500"
        fontWeight="normal"
        w="52rem"
      >
        <span
          style={{
            color: "#0453EF",
          }}
        >
          BERANI SEKOLAH{" "}
        </span>
        memiliki beberapa layanan yang dapat anda andalkan untuk pengelolaan
        proses bisnis serta operasional di sekolah anda, diantaranya...
      </Text>
    </Stack>
    <Flex direction="column" alignItems="center" mt="8">
      <SimpleGrid pos="relative" columns={[1, null, 3]} spacing="15px">
        <Box
          bg="#6f94d1"
          w={{
            sm: "200px",
            lg: "325px",
            "2xl": "360px",
          }}
          h="142px"
          pos="relative"
          rounded="base"
          _after={{
            content: `""`,
            position: "absolute",
            bg: "white",
            width: "50px",
            height: "50px",
            rounded: "base",
            top: -3,
            left: -2,
          }}
        >
          <svg
            width="22"
            height="16"
            style={{
              position: "absolute",
              top: "10",
              left: "7",
              zIndex: 1,
            }}
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 5L11 1L1 5L11 9L21 5ZM21 5V11"
              stroke="#0453EF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 6.6001V12.0001C5 12.7957 5.63214 13.5588 6.75736 14.1214C7.88258 14.684 9.4087 15.0001 11 15.0001C12.5913 15.0001 14.1174 14.684 15.2426 14.1214C16.3679 13.5588 17 12.7957 17 12.0001V6.6001"
              stroke="#0453EF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Img
            pos="relative"
            src={smsImage}
            w="full"
            h="full"
            objectFit="fill"
            borderRadius="10px"
          />
          <Text
            pos="absolute"
            bottom="10"
            left="8"
            width="75%"
            fontSize="bodyLarge"
            lineHeight="bodyLarge"
            color="white"
            fontWeight="semibold"
          >
            School Management System
          </Text>
        </Box>
        <Box
          bg="#6f94d1"
          w={{
            sm: "200px",
            lg: "325px",
            "2xl": "360px",
          }}
          h="142px"
          pos="relative"
          rounded="base"
          _after={{
            content: `""`,
            position: "absolute",
            bg: "white",
            width: "50px",
            height: "50px",
            rounded: "base",
            top: -3,
            left: -2,
          }}
        >
          <svg
            width="13"
            height="21"
            viewBox="0 0 13 21"
            style={{
              position: "absolute",
              top: "10",
              left: "13",
              zIndex: 1,
            }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 20L9 16L6.5 5L7.493 2.351C7.5497 2.19974 7.56891 2.03699 7.54899 1.87669C7.52907 1.71638 7.47061 1.56329 7.37862 1.43051C7.28662 1.29772 7.16383 1.1892 7.02074 1.11423C6.87766 1.03925 6.71854 1.00006 6.557 1H3.443C3.28146 1.00006 3.12234 1.03925 2.97926 1.11423C2.83617 1.1892 2.71338 1.29772 2.62138 1.43051C2.52939 1.56329 2.47093 1.71638 2.45101 1.87669C2.43109 2.03699 2.4503 2.19974 2.507 2.351L3.5 5L1 16L5 20Z"
              stroke="#0453EF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.5 5H6.5L11.5 10.5"
              stroke="#0453EF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <Img
            src={executiveDashboard}
            w="full"
            h="full"
            objectFit="fill"
            borderRadius="10px"
            pos="relative"
          />
          <Text
            pos="absolute"
            bottom="10"
            left="8"
            fontSize="bodyLarge"
            lineHeight="bodyLarge"
            color="white"
            fontWeight="semibold"
          >
            Executive Dashboard
          </Text>
        </Box>
        <Box
          bg="#6f94d1"
          w={{
            sm: "200px",
            lg: "325px",
            "2xl": "360px",
          }}
          h="142px"
          pos="relative"
          rounded="base"
          _after={{
            content: `""`,
            position: "absolute",
            bg: "white",
            width: "50px",
            height: "50px",
            rounded: "base",
            top: -3,
            left: -2,
          }}
        >
          <svg
            width="18"
            height="22"
            viewBox="0 0 18 22"
            style={{
              position: "absolute",
              top: "6",
              left: "10",
              zIndex: 1,
            }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.7513 3.4165H3.58464C3.01 3.4165 2.4589 3.64478 2.05257 4.05111C1.64624 4.45743 1.41797 5.00853 1.41797 5.58317V18.5832C1.41797 19.1578 1.64624 19.7089 2.05257 20.1152C2.4589 20.5216 3.01 20.7498 3.58464 20.7498H14.418C14.9926 20.7498 15.5437 20.5216 15.95 20.1152C16.3564 19.7089 16.5846 19.1578 16.5846 18.5832V5.58317C16.5846 5.00853 16.3564 4.45743 15.95 4.05111C15.5437 3.64478 14.9926 3.4165 14.418 3.4165H12.2513"
              stroke="#0453EF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.0833 1.25H7.91667C6.72005 1.25 5.75 2.22005 5.75 3.41667C5.75 4.61328 6.72005 5.58333 7.91667 5.58333H10.0833C11.28 5.58333 12.25 4.61328 12.25 3.41667C12.25 2.22005 11.28 1.25 10.0833 1.25Z"
              stroke="#0453EF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.75 11H12.25M5.75 15.3333H12.25"
              stroke="#0453EF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <Img
            src={ppdbOnline}
            w="full"
            h="full"
            objectFit="fill"
            borderRadius="10px"
            pos="relative"
          />
          <Text
            pos="absolute"
            bottom="10"
            left="8"
            fontSize="bodyLarge"
            lineHeight="bodyLarge"
            color="white"
            fontWeight="semibold"
          >
            PPDB Online
          </Text>
        </Box>
        <Box
          bg="#6f94d1"
          w={{
            sm: "200px",
            lg: "325px",
            "2xl": "360px",
          }}
          h="142px"
          pos="relative"
          rounded="base"
          _after={{
            content: `""`,
            position: "absolute",
            bg: "white",
            width: "50px",
            height: "50px",
            rounded: "base",
            top: -3,
            left: -2,
          }}
        >
          <svg
            width="18"
            height="22"
            viewBox="0 0 18 22"
            style={{
              position: "absolute",
              top: "4",
              left: "11",
              zIndex: 1,
            }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.7513 3.4165H3.58464C3.01 3.4165 2.4589 3.64478 2.05257 4.05111C1.64624 4.45743 1.41797 5.00853 1.41797 5.58317V18.5832C1.41797 19.1578 1.64624 19.7089 2.05257 20.1152C2.4589 20.5216 3.01 20.7498 3.58464 20.7498H14.418C14.9926 20.7498 15.5437 20.5216 15.95 20.1152C16.3564 19.7089 16.5846 19.1578 16.5846 18.5832V5.58317C16.5846 5.00853 16.3564 4.45743 15.95 4.05111C15.5437 3.64478 14.9926 3.4165 14.418 3.4165H12.2513"
              stroke="#0453EF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.0833 1.25H7.91667C6.72005 1.25 5.75 2.22005 5.75 3.41667C5.75 4.61328 6.72005 5.58333 7.91667 5.58333H10.0833C11.28 5.58333 12.25 4.61328 12.25 3.41667C12.25 2.22005 11.28 1.25 10.0833 1.25Z"
              stroke="#0453EF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.1693 9.91683H8.46094C8.02996 9.91683 7.61664 10.088 7.31189 10.3928C7.00714 10.6975 6.83594 11.1109 6.83594 11.5418C6.83594 11.9728 7.00714 12.3861 7.31189 12.6909C7.61664 12.9956 8.02996 13.1668 8.46094 13.1668H9.54427C9.97525 13.1668 10.3886 13.338 10.6933 13.6428C10.9981 13.9475 11.1693 14.3609 11.1693 14.7918C11.1693 15.2228 10.9981 15.6361 10.6933 15.9409C10.3886 16.2456 9.97525 16.4168 9.54427 16.4168H6.83594M9.0026 16.4168V17.5002M9.0026 8.8335V9.91683"
              stroke="#0453EF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <Img
            src={keuangan}
            w="full"
            h="full"
            objectFit="fill"
            borderRadius="10px"
            pos="relative"
          />
          <Text
            pos="absolute"
            bottom="8"
            left="8"
            width="75%"
            fontSize="bodyLarge"
            lineHeight="bodyLarge"
            color="white"
            fontWeight="semibold"
          >
            Aplikasi Keuangan Sekolah
          </Text>
        </Box>
        <Box
          bg="#6f94d1"
          w={{
            sm: "200px",
            lg: "325px",
            "2xl": "360px",
          }}
          h="142px"
          pos="relative"
          rounded="base"
          _after={{
            content: `""`,
            position: "absolute",
            bg: "white",
            width: "50px",
            height: "50px",
            rounded: "base",
            top: -3,
            left: -2,
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            style={{
              position: "absolute",
              top: "6",
              left: "9",
              zIndex: 1,
            }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 9C9.20914 9 11 7.20914 11 5C11 2.79086 9.20914 1 7 1C4.79086 1 3 2.79086 3 5C3 7.20914 4.79086 9 7 9Z"
              stroke="#0453EF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 18.9999V16.9999C1 15.939 1.42143 14.9216 2.17157 14.1715C2.92172 13.4213 3.93913 12.9999 5 12.9999H9C10.0609 12.9999 11.0783 13.4213 11.8284 14.1715C12.5786 14.9216 13 15.939 13 16.9999V18.9999M14 1.12988C14.8604 1.35018 15.623 1.85058 16.1676 2.55219C16.7122 3.2538 17.0078 4.11671 17.0078 5.00488C17.0078 5.89305 16.7122 6.75596 16.1676 7.45757C15.623 8.15918 14.8604 8.65958 14 8.87988M19 18.9999V16.9999C18.9949 16.117 18.6979 15.2607 18.1553 14.5643C17.6126 13.8679 16.8548 13.3706 16 13.1499"
              stroke="#0453EF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <Img
            src={siswa}
            w="full"
            h="full"
            objectFit="fill"
            borderRadius="10px"
            pos="relative"
          />
          <Text
            pos="absolute"
            bottom="9"
            left="8"
            fontSize="bodyLarge"
            lineHeight="bodyLarge"
            color="white"
            fontWeight="semibold"
          >
            Aplikasi Siswa
          </Text>
        </Box>
        <Box
          bg="#6f94d1"
          w={{
            sm: "200px",
            lg: "325px",
            "2xl": "360px",
          }}
          h="142px"
          pos="relative"
          rounded="base"
          _after={{
            content: `""`,
            position: "absolute",
            bg: "white",
            width: "50px",
            height: "50px",
            rounded: "base",
            top: -3,
            left: -2,
          }}
        >
          <svg
            width="15"
            height="22"
            viewBox="0 0 15 22"
            style={{
              position: "absolute",
              top: "8",
              left: "12",
              zIndex: 1,
            }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.4987 6.33333C8.93694 6.33333 10.1029 5.16741 10.1029 3.72917C10.1029 2.29093 8.93694 1.125 7.4987 1.125C6.06046 1.125 4.89453 2.29093 4.89453 3.72917C4.89453 5.16741 6.06046 6.33333 7.4987 6.33333Z"
              stroke="#0453EF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.49858 20.2585L12.8059 14.9502C13.1077 14.6522 13.3477 14.2975 13.5119 13.9064C13.6761 13.5153 13.7614 13.0956 13.7628 12.6714C13.7641 12.2472 13.6816 11.827 13.5199 11.4348C13.3582 11.0427 13.1206 10.6864 12.8206 10.3865C12.5207 10.0865 12.1644 9.84889 11.7723 9.6872C11.3801 9.52551 10.9599 9.44298 10.5357 9.44435C10.1115 9.44573 9.69182 9.53098 9.30073 9.6952C8.90964 9.85942 8.5549 10.0994 8.25691 10.4012L7.49858 11.1585L6.74024 10.4012C6.44226 10.0994 6.08751 9.85942 5.69642 9.6952C5.30533 9.53098 4.88562 9.44573 4.46145 9.44435C4.03728 9.44298 3.61703 9.52551 3.22489 9.6872C2.83274 9.84889 2.47645 10.0865 2.17651 10.3865C1.87658 10.6864 1.63893 11.0427 1.47724 11.4348C1.31555 11.827 1.23302 12.2472 1.23439 12.6714C1.23576 13.0956 1.32102 13.5153 1.48524 13.9064C1.64946 14.2975 1.88942 14.6522 2.19128 14.9502L7.49858 20.2585Z"
              stroke="#0453EF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <Img
            src={walimurid}
            w="full"
            h="full"
            objectFit="fill"
            borderRadius="10px"
          />
          <Text
            pos="absolute"
            bottom="9"
            left="8"
            fontSize="bodyLarge"
            lineHeight="bodyLarge"
            color="white"
            fontWeight="semibold"
          >
            Aplikasi Wali Murid
          </Text>
        </Box>
      </SimpleGrid>
    </Flex>
  </>
);
