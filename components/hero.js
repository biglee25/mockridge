import styled from "styled-components";

/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
 */
const Container = styled.section`
  text-align: center;
  background-image: url("images/hero.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: relative;
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
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .icon {
    font-size: 1rem;
  }

  h1 {
    font-size: 3rem;
    line-height: 3rem;
    text-align: left;
    color: #ccc;
    text-shadow: 2px 2px #000;
  }

  p {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export default function Hero() {
  return (
    <>
      <Container>
        <h1>CUSTOM NAMEPLATES PRODUCED TO SPECIFICATION</h1>
        <p>
          We have over fifty years of expertise in custom labels and nameplates,
          with Mockridge Labels, your in safe hands.
        </p>
      </Container>
    </>
  );
}
