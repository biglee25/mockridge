import styled from "styled-components";

const MainWrapper = styled.div`
  background: #fff;
  margin: 7rem auto;

  @media (max-width: 768px) {
    margin: 1rem auto;
  }
`;

export default function Main({ children }) {
  return <MainWrapper>{children}</MainWrapper>;
}
