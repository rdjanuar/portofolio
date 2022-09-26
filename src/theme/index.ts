import { extendTheme } from "@chakra-ui/react";

import { fonts, fontSizes, lineHeights } from "./foundations/fonts";
import { colors } from "./foundations/color";
import { radii } from "./foundations/border";
import { textStyles } from "./foundations/layerStyles";
import { transition } from "./foundations/transitions";
import { Input } from "./components/input";
import { Button } from "./components/button";
import { Container } from "./components/container";

const overrides: object = {
  colors,
  fonts,
  fontSizes,
  radii,
  lineHeights,
  textStyles,
  transition,
  components: {
    Button,
    Input,
    Container,
  },
};

export default extendTheme(overrides);
