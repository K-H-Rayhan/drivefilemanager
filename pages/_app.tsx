import Layout from "@/components/Layout/Layout";
import { MenuProvider } from "@/context/MenuContext";
import { ResultProvider } from "@/context/ResultsContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

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
