import { extendTheme } from "@chakra-ui/react";
import { colors } from "./themeConfig";

const config = {
  initialColorMode: "dark",
};

export const theme = extendTheme({ colors, config });
