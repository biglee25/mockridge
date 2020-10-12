import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 10rem auto;
  display: flex;
  align-items: center;
  justify-content: center;

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
