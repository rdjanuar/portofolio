import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Container: ComponentStyleConfig = {
  baseStyle: {
    mx: "auto",
    w: "100%",
    px: 0,
    overflow: "hidden",
  },
  sizes: {
    sm: {
      mx: 20,
    },
    lg: {
      maxW: "1920px",
      mt: "6",
    },
  },
  defaultProps: {
    size: "lg",
    variant: "sm",
    colorScheme: "",
  },
};
