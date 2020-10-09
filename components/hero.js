import styled from "styled-components";

const Container = styled.section`
  text-align: center;
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
