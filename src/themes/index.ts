import { type ThemeConfig, extendTheme } from "@chakra-ui/react";
import { fonts } from "./foundations";

export const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const overrides = {
  fonts,
  config,
};

export default extendTheme(overrides);
