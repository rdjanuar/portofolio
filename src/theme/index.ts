import { extendTheme } from "@chakra-ui/react";

import { fonts } from "./foundations/fonts";
import { fontSizes } from "./foundations/fonts";
import { lineHeights } from "./foundations/fonts";
import { colors } from "./foundations/color";
import { borders } from "./foundations/border";
import { Input } from "./components/input";
import { Button } from "./components/button";
import { Container } from "./components/container";

const overrides: object = {
  colors,
  fonts,
  fontSizes,
  borders,
  lineHeights,
  components: {
    Button,
    Input,
    Container,
  },
};

export default extendTheme(overrides);
