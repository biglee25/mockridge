import Head from "next/head";

import Navbar from "../components/navbar";
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next demos</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Hero />
    </>
  );
}
