import styled from "styled-components";
import { Fade as Hamburger } from "hamburger-react";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 2rem 1rem;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.div`
  ul {
    display: flex;
    list-style: none;
  }

  li {
    text-decoration: none;
    padding: 0 1rem;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    ul {
      display: none;
    }
  }
`;

const Burger = styled.button`
  button {
    border: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    visibility: hidden;
    background: black;
    color: white;
  }

  @media (max-width: 768px) {
    button {
      visibility: visible;
    }
  }
`;

export default function Navbar() {
  return (
    <>
      <Container>
        <h1>Logo Here</h1>
        <Menu>
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
          <Burger>
            <button>
              <Hamburger direction="right" />
            </button>
          </Burger>
        </Menu>
      </Container>
    </>
  );
}
