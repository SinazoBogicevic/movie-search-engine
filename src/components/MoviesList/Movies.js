import React, { useState, useContext, useEffect } from "react";
import { QueryContext } from "../../QueryContext";
import { Main, Container, Title, List } from "./movies.elements";
import Card from "../Card/Card";

const Movies = () => {
  const [query, setQuery] = useContext(QueryContext);
  const [movies, setMovies] = useState([]);
  const isSearching = query === "";
  const cards = movies.map((movie) => {
    return <Card movie={movie} />;
  });

  const queryMovies = () => {
    const api = `https://api.themoviedb.org/3/search/movie?api_key=396dea73ba4dc94c515ba23f832b0ede&language=en-US&query=${query}&page=1&include_adult=false`;
    const popularApi = `https://api.themoviedb.org/3/movie/popular?api_key=396dea73ba4dc94c515ba23f832b0ede&language=en-US`;

    if (isSearching) {
      fetchMovies(popularApi);
      return;
    }

    fetchMovies(api);
  };

  const fetchMovies = async (api, e) => {
    const res = await fetch(api);

    try {
      if (res.status === 200) {
        const data = await res.json();
        console.log(data);
        const { results } = data;
        console.log(results);
        setMovies(results);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    queryMovies();
  }, []);

  return (
    <Main>
      <Container>
        <Title>{isSearching ? "popular movies" : "searching results"}</Title>
        <List>{cards}</List>
      </Container>
    </Main>
  );
};

export default Movies;
