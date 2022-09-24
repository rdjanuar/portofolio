interface Colors {
  base: object;
  functional: object;
  neutral: object;
}

const base = {
  primary: {
    DEFAULT: "#6F94D1",
    50: "#FAFBFD",
    100: "#EBF0F9",
    200: "#CCD9EF",
    300: "#ADC2E5",
    400: "#8EABDB",
    500: "#6F94D1",
    600: "#4474C3",
    700: "#325B9D",
    800: "#254273",
    900: "#172A48",
  },
  secondary: {
    DEFAULT: "#1E293B",
    50: "#627FAF",
    100: "#5574A7",
    200: "#47618C",
    300: "#3A4F71",
    400: "#2C3C56",
    500: "#1E293B",
    600: "#0B0F16",
    700: "#000000",
    800: "#000000",
    900: "#000000",
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
