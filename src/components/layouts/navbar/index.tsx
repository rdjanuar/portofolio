import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Link as ChakraLink,
  HStack,
  chakra,
  shouldForwardProp,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "About",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Reach me!",
    href: "/contact",
  },
];

const ChakraUnderline = chakra(motion.span, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export const Navbar = () => {
  const { colorMode, setColorMode } = useColorMode();
  const path = usePathname();
  const linkColor = useColorModeValue(
    links.map((val) => val.href === path) ? "black" : "white",
    path === "/" ? "white" : "whiteAlpha.500"
  );

  console.log(links.map((val) => val.href === path));
  const underlineColor = useColorModeValue("black", "white");

  return (
    <HStack spacing={10} justify="center" pt={4}>
      {links.map((val, idx) => (
        <ChakraLink
          _hover={{
            textStyle: "none",
          }}
          pos="relative"
          fontSize="16px"
          textColor={val.href === path ? "white" : "whiteAlpha.500"}
          as={Link}
          href={val.href ? val.href : ""}
          key={idx}
        >
          {val.href === path && (
            <ChakraUnderline
              pos="absolute"
              w="full"
              layoutId="underline"
              top="100%"
              left={0}
              h="1px"
              bg={underlineColor}
            />
          )}
          {val.name}
        </ChakraLink>
      ))}
      <motion.div
        key={colorMode}
        variants={variants}
        animate="show"
        initial="hide"
      >
        {colorMode === "dark" ? (
          <MoonIcon cursor="pointer" onClick={() => setColorMode("light")} />
        ) : (
          <SunIcon cursor="pointer" onClick={() => setColorMode("dark")} />
        )}
      </motion.div>
    </HStack>
  );
};

export const variants = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
  hide: {
    x: -10,
    opacity: 0,
  },
};
