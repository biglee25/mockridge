import { useState } from "react";

import styled from "styled-components";
import { Twirl as Hamburger } from "hamburger-react";

const Navbar = styled.div`
postion: fixed
  height: auto;
  top: 0;
  left: 0;
  background: #333;
  color: white;
  padding: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
`;

const Menu = styled.div`
  position: absolute;
  visibility: hidden;
  top: 0;
  right: 0;
  min-width: 100%;
  height: 100%;
  background: #333;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  visibility: ${({ nav }) => (nav ? "visible" : "hidden")};
  opacity: ${({ nav }) => (nav ? 1 : 0)};

  transition: all 0.2s ease-in-out;
  z-index: 2;

  ul {
    text-transform: uppercase;
    padding: 0;

    li {
      text-decoration: none;
      list-style: none;
      margin-top: 0.5rem;
    }
  }
`;

const Icon = styled.div`
  position: relative;
  top: 50%;
  right: 0;
  z-index: 10000;
`;

export default function Nav() {
  const [nav, showNav] = useState(false);

  return (
    <div>
      <Navbar>
        <img src="images/logo.svg" width="20%" alt="logo"></img>

        <a onClick={() => showNav(!nav)}>
          <Icon>
            <Hamburger direction="right" color="#fff" />
          </Icon>
        </a>
        <Menu nav={nav}>
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
        </Menu>
      </Navbar>
    </div>
  );
}
