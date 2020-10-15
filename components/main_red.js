import styled from "styled-components";

const MainWrapper = styled.div`
  background: #e60000;
  margin: 7rem auto;
  padding: 7rem 0;
  color: #fff;

  @media (max-width: 768px) {
    margin: 1rem auto 2rem auto;
  }
`;

export default function MainRed({ children }) {
  return <MainWrapper>{children}</MainWrapper>;
}
