import Head from "next/head";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next demo</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <h1>Homepage</h1>
      <p>This is some text</p>
      <p>This is some text</p>
    </>
  );
}
