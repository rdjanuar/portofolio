import { Text, chakra, useColorModeValue } from "@chakra-ui/react";

export const Footer = () => {
  const textColor = useColorModeValue("blackAlpha.500", "whiteAlpha.500");
  const spanColor = useColorModeValue("black", "white");
  return (
    <Text textAlign="center" fontSize="12px" color={textColor} py={10}>
      {" "}
      &#169; {new Date().getFullYear()} - Rizky Djanuar Inspired from{" "}
      <chakra.a href="https://saugi.me/" target="_blank" textColor={spanColor}>
        Saugi
      </chakra.a>{" "}
    </Text>
  );
};
