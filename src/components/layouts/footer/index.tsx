import { Text, chakra, useColorModeValue } from "@chakra-ui/react";

export const Footer = () => {
  const textColor = useColorModeValue("black", "white");
  return (
    <Text textAlign="center" fontSize="14px" color={textColor} py={10}>
      {" "}
      &#169; {new Date().getFullYear()} - Rizky Djanuar Inspired from{" "}
      <chakra.a href="https://saugi.me/" target="_blank" fontWeight="bold">
        Saugi
      </chakra.a>{" "}
    </Text>
  );
};
