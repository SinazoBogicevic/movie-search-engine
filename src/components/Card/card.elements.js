import styled from "styled-components";

export const CardContainer = styled.li`
  position: relative;
  cursor: pointer;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  border-radius: 20px;
  background: rgb(244, 244, 244, 1);
  webkit-transition: all 0.4s linear;
  transition: all 0.4s linear;
  &:hover {
    opacity: 1;
    background: rgb(244, 244, 244, 0.3);
  }
`;

export const CardImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
  border-radius: 20px;
`;
