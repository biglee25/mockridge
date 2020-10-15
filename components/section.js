import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem auto 2rem auto;
    padding: 0 0.5rem;
    display: block;
  }
`;

export default function Wrapper({ children }) {
  return <MainWrapper>{children}</MainWrapper>;
}
