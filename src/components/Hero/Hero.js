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
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const styles = {
    backgroundImage: `url(${bg})`,
  };

  const api = `https://api.themoviedb.org/3/discover/movie?api_key=396dea73ba4dc94c515ba23f832b0ede&certification_country=US&certification.lte=G&sort_by=popularity.desc&maxResults=1`;
  //const api = `https://api.themoviedb.org/3/movie/popular?api_key=396dea73ba4dc94c515ba23f832b0ede&language=en-US&maxResults=1`;

  const fetchData = async (e) => {
    try {
      const res = await fetch(api);

      if (res.status === 200) {
        const data = await res.json();
        const { results } = data;
        getHeroBg(results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getHeroBg = (list) => {
    
    const bannerMovie = list[0];
    const {title, overview, backdrop_path} = bannerMovie;

    const url = `https://image.tmdb.org/t/p/w1280/${backdrop_path}`
    setBg(url);
    setTitle(title);
    setOverview(overview)
    
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container>
      <BgContainer style={styles}>
        <TextContainer>
          <Title>{title}</Title>
          <Description>{overview}</Description>
        </TextContainer>
      </BgContainer>
    </Container>
  );
};

export default Hero;
