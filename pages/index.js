import Head from "next/head";
import styled from "styled-components";
import Main from "../components/main";
import MainRed from "../components/main_red";
import Section from "../components/section";
import Card from "../components/card";

import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Navbar from "../components/navbar";
import Hero from "../components/hero";

const Container = styled.div`
  padding: 0 2rem;

  h1,
  h2,
  p {
    text-align: left;

    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const MarkerWhite = styled.div`
  position: relative;
  top: -155px;
  left: 50%;
  width: 50px;
  height: 50px;
  -webkit-transform: translateX(-50%) rotate(45deg);
  transform: translateX(-50%) rotate(45deg);
  background: #fff;
`;

const MarkerRed = styled.div`
  position: relative;
  top: 150px;
  left: 50%;
  width: 50px;
  height: 50px;
  -webkit-transform: translateX(-50%) rotate(45deg);
  transform: translateX(-50%) rotate(45deg);
  background: #e60000;
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
        <title>Mockridge Labels and Nameplates</title>
      </Head>
      <Navbar />
      <Hero />
      <Main>
        <Section>
          <ImageContainer>
            <img src="images/50-Years.jpg" alt="logo"></img>
          </ImageContainer>
          <Container>
            <h2>Over 50 Years of Quality & Service to the Industry</h2>
            <p>
              Established 1966 One of the longest established and most reliable
              manufacturers of product identification in the United Kingdom.
            </p>
            <p>
              We employ a wide range of processes including anodised aluminium,
              chemically etched brass or stainless steel, screen printed,
              digitally printed, sub-surface labels and switch panels,
              polyurethane domed badges, and decals.
            </p>
          </Container>
        </Section>
        <Section>
          <Card>
            <h2>What we produce</h2>
            <p>
              We produce a wide range of tailored identification products, such
              as plastic and metal labels and decals, nameplates and data
              plates, panel fronts and overlays, and polyurethane domed
              identification badges, among others.
            </p>
            <p>
              We employ a wide range of processes including anodised aluminium,
              chemically etched brass or stainless steel, screen printed,
              digitally printed, sub-surface labels and switch panels,
              polyurethane domed badges, and decals.
            </p>
          </Card>
          <Card>
            <h2>What sets us apart</h2>
            <p>
              In addition to our expertise, what sets us apart is the history of
              our company. We have been operational for over half of a century,
              in which time we have worked on many interesting projects and have
              accumulated enormous experience in the process.
            </p>
            <p>
              The extent of our success in providing ease and quality of service
              is reflected in how much of our business is repeat or via
              recommendation.
            </p>
          </Card>
        </Section>
        <MainRed>
          <MarkerWhite />
          <Section>
            <Container>
              <Card>
                <h2>We are UL Approved under categories PGAA & PGDQ2</h2>
                <p>
                  We are UL approved to manufacture UL Approved labels : PGAA &
                  PGDQ2 standards, which means that our products meet the
                  highest safety, and quality standards and we can print the UL
                  logo and assist our clients with getting UL approval for the
                  Membrane Switches, Graphic Overlays and Labels we manufacture
                  for export to the USA.
                </p>
              </Card>
            </Container>
            <ImageContainer>
              <img src="images/ul-logo.png" alt="UL logo"></img>
            </ImageContainer>
          </Section>
          <MarkerRed />
        </MainRed>
      </Main>
    </>
  );
}
