import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  padding: 42px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-transform: capitalize;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  gap: 40px;
  position: relative;
  list-style-type: none;
`;
