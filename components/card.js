import styled from "styled-components";

const CardWrapper = styled.div`
  width: 100%;
  margin: 1rem auto;
  padding: 2rem;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    display: block;
    text-align: center;
  }
`;

const Container = styled.div`
  width: 100%;
`;

export default function Card({ children }) {
  return (
    <CardWrapper>
      <Container>{children}</Container>
    </CardWrapper>
  );
}
