import "@fontsource/montserrat-alternates/100.css";
import "@fontsource/montserrat-alternates/200.css";
import "@fontsource/montserrat-alternates/300.css";
import "@fontsource/montserrat-alternates/400.css";
import "@fontsource/montserrat-alternates/500.css";
import "@fontsource/montserrat-alternates/600.css";
import "@fontsource/montserrat-alternates/700.css";
import "@fontsource/montserrat-alternates/800.css";
import "@fontsource/montserrat-alternates/900.css";

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Montserrat Alternates, sans-serif",
    body: "Montserrat Alternates, sans-serif",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
