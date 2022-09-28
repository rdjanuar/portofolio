interface Colors {
  base: object;
  functional: object;
  neutral: object;
}

const base = {
  primary: {
    DEFAULT: "#0453EF",
    50: "#ADC8FE",
    100: "#99BBFD",
    200: "#71A0FD",
    300: "#4985FC",
    400: "#216AFB",
    500: "#0453EF",
    600: "#0340B8",
    700: "#022D81",
    800: "#011A49",
    900: "#000612",
  },
  secondary: {
    DEFAULT: "#04032D",
    50: "#130ED9",
    100: "#120DC6",
    200: "#0E0BA0",
    300: "#0B087A",
    400: "#070653",
    500: "#04032D",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000",
  },
  tertiary: {
    DEFAULT: "#5D5EE7",
    50: "#FDFDFF",
    100: "#EBEBFC",
    200: "#C8C8F7",
    300: "#A4A5F2",
    400: "#8181EC",
    500: "#5D5EE7",
    600: "#2C2DE0",
    700: "#1B1CB8",
    800: "#141588",
    900: "#0D0D57",
  },
  quaternary: {
    DEFAULT: "#C7D2FE",
    50: "#FFFFFF",
    100: "#FFFFFF",
    200: "#FFFFFF",
    300: "#FFFFFF",
    400: "#EFF2FF",
    500: "#C7D2FE",
    600: "#90A6FD",
    700: "#5979FC",
    800: "#224DFB",
    900: "#0430E1",
  },
};

const functional = {
  primary: "#fff",
  secondary: {
    DEFAULT: "#F8E64A",
    50: "#FFFEFB",
    100: "#FEFCE7",
    200: "#FDF6C0",
    300: "#FBF199",
    400: "#FAEB71",
    500: "#F8E64A",
    600: "#F6DF14",
    700: "#CAB608",
    800: "#948506",
    900: "#5E5504",
  },
};

const neutral = {
  DEFAULT: "#ECECEC",
  10: "#989898",
  20: "#878787",
  30: "#767676",
  40: "#656565",
};

export const colors: Colors = {
  base,
  functional,
  neutral,
};
