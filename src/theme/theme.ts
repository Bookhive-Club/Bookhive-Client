import { extendTheme } from "@chakra-ui/react";
import { colors } from "./themeConfig";
import { Button } from "./buttonConfig";

const config = {
    initialColorMode: 'dark'
}


export const theme = extendTheme({colors , config  });
