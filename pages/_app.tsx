import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

const SEO = {
  title: "iOS SEO Test",
  description: "Testing next-seo",
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
