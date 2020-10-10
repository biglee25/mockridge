import styled from "styled-components";

const Container = styled.section`
  text-align: center;
  background-image: url("images/hero.jpg");
  object-fit: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  color: white;
  padding: 0 2rem;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  h1 {
    font-size: 3.5rem;
    line-height: 3.5rem;
    text-align: left;
  }
`;

export default function Hero() {
  return (
    <>
      <Container>
        <h1>CUSTOM NAMEPLATES PRODUCED TO SPECIFICATION</h1>
        <p>
          We have over fifty years of expertise in custom labels and nameplates.
          With Mockridge Labels, your in safe hands.
        </p>
      </Container>
    </>
  );
}
