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

  const api = `https://api.themoviedb.org/3/movie/popular?api_key=396dea73ba4dc94c515ba23f832b0ede&language=en-US&maxResults=1`;

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
    list.forEach((element) => {
      const { adult, genre_ids, backdrop_path, title, overview } = element;

      if (adult) {
        return;
      }

      genre_ids.forEach((id) => {
        if (id === 12 || id === 16 || id === 35 || 10751 || id === 14) {
          const url = `https://image.tmdb.org/t/p/w1280/${backdrop_path}`;
          setBg(url);
          setTitle(title);
          setOverview(overview);
        }
      });
    });
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
