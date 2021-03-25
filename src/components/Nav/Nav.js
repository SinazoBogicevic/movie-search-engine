import React from "react";
import {
  Container,
  NavItems,
  LogoContainer,
  MdbContainer,
  Slogan,
} from "./nav.elements";
import { Logo, LinkUI } from "../../GlobalStyles";
import logo from "../../assets/logo.png";
import mdb from "../../assets/mdb.svg";

const Nav = () => {
  return (
    <Container>
      <NavItems>
        <LogoContainer>
          <Logo src={logo} alt="kids zone written in rainbow colors" />
          {/**<Slogan>Let the fun begin</Slogan>**/}
        </LogoContainer>
        <MdbContainer>
          <Logo src={mdb} alt="neon text let the fun begin" />
        </MdbContainer>
      </NavItems>
    </Container>
  );
};

export default Nav;
