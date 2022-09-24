import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Input: ComponentStyleConfig = {
  baseStyle: {
    fontSize: "0.875rem",
    borderColor: "#989898",
    _placeholder: {
      color: "#989898",
    },
    height: "2.875rem",
  },
  sizes: {
    primary: {
      field: {
        width: "41.375rem",
      },
    },
    secondary: {
      field: {
        width: "323px",
      },
    },
  },
  variants: {},
  defaultProps: {},
};
