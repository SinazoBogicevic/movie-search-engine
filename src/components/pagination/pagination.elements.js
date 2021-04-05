import styled from "styled-components";

export const Button = styled.button`
  display: ${({ visible }) => (visible ? "block" : "none")};
  align-self: center;
  flex-shrink: 0;
  padding: 1.5em 5em;
  outline: none;
  border: none;
  background: var(--blue);
  border-radius: 4rem;
  color: var(--white);
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    transform: scale(0.98);
  }
`;
