import { extendTheme } from "@chakra-ui/react";

import { colors } from "./foundations/color";

const overrides: object = {
  colors,
};

export default extendTheme(overrides);
