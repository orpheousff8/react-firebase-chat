import { extendTheme, DeepPartial, ThemeConfig } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
} as DeepPartial<ThemeConfig>;

const theme = extendTheme({ config });
export default theme;
