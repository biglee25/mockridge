import styled from "styled-components";

const Container = styled.section`
  text-align: center;
  background-image: url("images/hero.jpg");
  background-position: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  color: white;
`;

export default function Hero() {
  return (
    <>
      <Container>
        <h1>Homepage</h1>
        <p>This is some text</p>
      </Container>
    </>
  );
}
