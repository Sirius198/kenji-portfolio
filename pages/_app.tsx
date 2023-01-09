// import "../styles/globals.css";
// import "../public/leven.min.css";
import "../public/bostami-index.css";
import "../public/bostami-style.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient";
import Header from "../components/header";
import { RecoilRoot } from "recoil";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap"></link>
        </Head>
        <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
          <div className="z-50">
            <div className="container">
              <Header />
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
