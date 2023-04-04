// Internal imports
import type { AppProps } from "next/app";
// External imports
import "@/styles/globals.css";
import { MenuProvider } from "@/context/MenuContext";
import { ResultProvider } from "@/context/ResultsContext";
import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MenuProvider>
      <ResultProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ResultProvider>
    </MenuProvider>
  );
}
