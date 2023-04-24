import { type AppType } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "~/components";

import { api } from "~/utils/api";
import themes from "~/themes";
import { AnimatePresence } from "framer-motion";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={themes}>
      <Layout>
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
};

export default api.withTRPC(MyApp);
