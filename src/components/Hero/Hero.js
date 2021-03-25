import React, { useState, useEffect } from "react";
import {
  Container,
  BgContainer,
  Title,
  Description,
  TextContainer,
} from "./hero.elements";

const Hero = () => {
  const [bg, setBg] = useState("");

  const fetchData = () => {};

  useEffect(() => {}, []);
  return (
    <Container>
      <BgContainer />
      <TextContainer>
        <Title></Title>
        <Description></Description>
      </TextContainer>
    </Container>
  );
};

export default Hero;
