import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 42px;
`;

export const Container = styled.div`
  padding: 42px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  padding-bottom: 42px;
  text-transform: capitalize;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  gap: 40px;
  position: relative;
  list-style-type: none;

@media screen and (max-width: 1024px){
    grid-template-columns: repeat(4, minmax(100px, 1fr));
}

@media screen and (max-width: 768px){
  grid-template-columns: repeat(3, minmax(100px, 1fr));
};

@media screen and (max-width: 600px){
  grid-template-columns: repeat(2, minmax(100px, 1fr));
};

@media screen and (max-width: 375px){
  grid-template-columns: repeat(1, 1fr);
};
`;