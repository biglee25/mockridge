import Head from "next/head";
import styled from "styled-components";

import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Navbar from "../components/navbar";
import Hero from "../components/hero";

const Section = styled.section`
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100%;
  margin: auto;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Container = styled.div`
  padding: 2rem;
  text-align: center;

  h1,
  p {
    text-align: left;

    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <style>{dom.css()}</style>
        <title>Next demos</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Hero />
      <Section>
        <Container>
          <h1>Title</h1>
          <p>
            text goes here text goes here text goes here text goes heretext goes
            here text goes here text goes here text goes here text goes heretext
            goes here text goes here text goes here text goes here text goes
            heretext goes here text goes here text goes here text goes here text
            goes heretext goes here
          </p>
        </Container>
        <Container>
          <img src="images/hero.jpg" alt="logo"></img>
        </Container>
      </Section>
      <Section>
        <Container>
          <img src="images/hero.jpg" alt="logo"></img>
        </Container>
        <Container>
          <h1>Title</h1>
          <p>
            text goes here text goes here text goes here text goes heretext goes
            here text goes here text goes here text goes here text goes heretext
            goes here text goes here text goes here text goes here text goes
            heretext goes here text goes here text goes here text goes here text
            goes heretext goes here
          </p>
        </Container>
      </Section>
    </>
  );
}
