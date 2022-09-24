import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "0.625rem",
    fontWeight: 600,
    fontSize: "0.75rem",
    lineHeight: "14.52px",
  },
  sizes: {
    primary: {
      height: "3rem",
      width: "9rem",
    },
    secondary: {
      height: "3rem",
      width: "7.5rem",
      fontSize: "0.6rem",
    },
  },
  variants: {
    primary: {
      bg: "#5D5EE7",
    },
    secondary: {
      bg: "#1E293B",
    },
    tertiary: {
      bg: "#C7D2FE",
    },
  },
  defaultProps: {},
};
