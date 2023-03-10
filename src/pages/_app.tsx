import type {AppProps} from "next/app";

import "@/styles/globals.css";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {useState} from "react";

import {Layout} from "@/components";

function MyApp({Component, pageProps}: AppProps) {
  const [client] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
