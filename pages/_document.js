import { Html, Head, Main, NextScript } from "next/document";
import Analytics from "@/components/Analytics";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <body>
        <Analytics />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
