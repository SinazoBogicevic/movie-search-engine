import styled from "styled-components";
import { Link } from "react-router-dom";

export const Bar = styled.div`
width: 100%;
padding: 20px;
background: var(--grey);
color: var(--white);
`

export const LinkUI = styled(Link)`
  text-decoration: none;
  color: var(--white);
  cursor: pointer;
  font-size: 1.4rem;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Space = styled.span`
padding-left: 0.3em;
`