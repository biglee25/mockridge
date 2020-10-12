import Head from "next/head";
import styled from "styled-components";
import Wrapper from "../components/wrapper";

import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Navbar from "../components/navbar";
import Hero from "../components/hero";

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

const ImageContainer = styled.div`
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
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
      <Wrapper>
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
        <ImageContainer>
          <img src="images/hero.jpg" alt="logo"></img>
        </ImageContainer>
      </Wrapper>
    </>
  );
}
