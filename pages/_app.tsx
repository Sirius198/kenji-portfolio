// import "../styles/globals.css";
// import "../public/leven.min.css";
import "../public/bostami-index.css";
import "../public/bostami-style.css";
import type { AppProps } from "next/app";
import Header from "../components/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
      <div className="z-50 ">
        <div className="container">
          <Header />
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
