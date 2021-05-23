import React, { useState, useContext, useEffect } from "react";
import { QueryContext } from "../../QueryContext";
import { DataContext } from "../../DataContext";
import { PageContext } from "../../PageContext";
import { Main, Container, Title, List } from "./movies.elements";
import { Spinner } from "../spinner/Spinner";
import Pagination from "../pagination/Pagination";
import Card from "../Card/Card";

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [query] = useContext(QueryContext);
  const [data, setData] = useContext(DataContext);
  const [page] = useContext(PageContext);
  const [visible, setVisible] = useState(false);
  const isSearching = query === "";
  const cards = data.map((movie) => {
    return <Card movie={movie} key={movie.id} />;
  });

  const queryMovies = () => {
    const api = `https://api.themoviedb.org/3/discover/movie?api_key=396dea73ba4dc94c515ba23f832b0ede&query${query}&page=${page}&certification_country=US&certification.lte=G&sort_by=popularity.desc`;
    const popularApi = `https://api.themoviedb.org/3/discover/movie?api_key=396dea73ba4dc94c515ba23f832b0ede&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=${page}`

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
        const { results } = data;
        
        if (results.length === 0) {
          setVisible(false);
        }
        setData(results);
        setLoading(false);
      }
    } catch (e) {
      setVisible(false);
      console.log(e);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      queryMovies();
    }, 1000);

    return () => clearTimeout(timer);
  }, [query, page]);

  return (
    <Main>
      <Container>
        <Title>{isSearching ? "popular movies" : "searching results"}</Title>
        <List>{cards}</List>
      </Container>
      <Pagination visible={visible} />
    </Main>
  );
};

export default Movies;
