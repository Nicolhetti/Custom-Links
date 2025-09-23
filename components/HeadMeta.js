import Head from "next/head";

export default function HeadMeta() {
  return (
    <Head>
      <title>Nicolhetti - Links</title>
      <meta
        name="description"
        content="All my Links on https://links.nicolhetti.com.ar/"
      />
      <meta name="author" content="Nicolhetti" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/favicon.ico" />
    </Head>
  );
}
