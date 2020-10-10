import styled from "styled-components";

const Container = styled.section`
  text-align: center;
  background-image: url("images/hero.jpg");
  background-position: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export default function Hero() {
  return (
    <>
      <Container>
        <h1>Homepage</h1>
        <p>This is some text</p>
        <p>This is some text</p>
      </Container>
    </>
  );
}
