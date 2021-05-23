import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const BgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TextContainer = styled.div`
  position: absolute;
  left: 4rem;
  bottom: 4rem;
  display: flex;
  flex-direction: column;
  width: 50%;
  color: var(--white);
  padding: 24px 8px;
`;

export const Title = styled.h1``;

export const Description = styled.p``;
