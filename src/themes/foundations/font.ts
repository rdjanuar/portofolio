import { Open_Sans, Lexend_Deca } from "next/font/google";

const lexend = Lexend_Deca({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const fonts = {
  body: openSans.style.fontFamily,
  heading: lexend.style.fontFamily,
};
