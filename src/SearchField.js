import React, { useState, useContext, useEffect } from "react";
import Card from "./components/Card/Card";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GenreContext } from "./GenreContext";

export default function SearchField() {
  const [query, setQuery] = useState("");
  const [movieList, setMovies] = useState([]);
  const [genres, setGenres] = useContext(GenreContext);

  const searchMovies = async (e) => {
    e.preventDefault();

    const string = query.replace(" ", "+");
    setQuery(string);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=396dea73ba4dc94c515ba23f832b0ede&language=en-US&query=${string}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const getMovieDetail = (id) => {
    const film = movieList.find((item) => item.id === id);
    return film;
  };

  useEffect(() => {
    async function fetchGenres() {
      const res = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=396dea73ba4dc94c515ba23f832b0ede&language=en-US"
      );
      const data = await res.json();
      setGenres(data.genres);
    }
    fetchGenres();
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("search-results");
    try {
      if (data) {
        setMovies(JSON.parse(data));
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("search-results", JSON.stringify(movieList));
  }, [movieList]);

  return (
    <Container>
      <div>
        <h1 className="title">
          <Link to="/" style={{ textDecoration: "none", color: "#0000ff" }}>
            Movie Search
          </Link>
        </h1>
        <form className="form" onSubmit={searchMovies}>
          <label className="label">Movie</label>
          <input
            type="text"
            placeholder="i.e Hunger Games"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="movie-list">
        {movieList.map((movie) => (
          <Card movie={movie} key={movie.id} handleDetail={getMovieDetail} />
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  .form {
    display: grid;
  }
  .label {
    margin-bottom: 0.5rem;
    fontsize: 1.5rem;
  }
  input[type="text"] {
    margin-bottom: 0.5rem;
    padding: 10px;
    border: 2px solid black;
    border-radius: 20px;
  }
  button {
    padding: 10px;
    border: 2px solid black;
    border-radius: 20px;
    background: rgb(0, 0, 0, 0.75);
    cursor: pointer;
    color: white;
    fontsize: 1.2rem;
    margin-bottom: 12px;
    &:hover {
      background: rgb(0, 0, 0, 0.85);
    }
  }
  @media screen and (min-width: 786px) {
    .form {
      grid-template-columns: auto 1fr auto;
      grid-gap: 1rem;
    }
    .label,
    input[type="text"] {
      margin-bottom: 0px;
    }
    form {
      margin-bottom: 2rem;
    }
    .movie-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
