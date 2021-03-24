import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DataContext } from "./DataContext";
import { GenreContext } from "./GenreContext";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MoviePage() {
  const [state, setState] = useContext(DataContext);
  const [film, setFilm] = useState({});
  const [genres] = useContext(GenreContext);
  const genreList = [];
  //const arrow = <FontAwesomeIcon icon="arrow-alt-circle-left" />;

  useEffect(() => {
    const data = localStorage.getItem("moviePage");

    try {
      if (data) {
        setFilm((prevState) => ({ state: prevState }));
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("moviePage", JSON.stringify(state));
  }, [state]);

  useEffect(() => setFilm(state), [state]);

  const tempIds = film.genre_ids;
  if (tempIds != null) {
    for (let k = 0; k < genres.length; k++) {
      const obj = genres[k];
      const id = obj["id"];
      for (let i = 0; i < tempIds.length; i++) {
        if (id === tempIds[i]) {
          genreList.push(obj["name"]);
        }
      }
    }
  }

  return (
    <Wrapper>
      <div className="arrow">
        <Link to="/" style={{ textDecoration: "none" }}>
          <i class="fas fa-long-arrow-alt-left"></i>
        </Link>
      </div>
      <div className="movieContainer">
        <img
          src={
            "https://image.tmdb.org/t/p/w185_and_h278_bestv2/" +
            film.poster_path
          }
          alt={film.title + " poster"}
        />
        <div className="info">
          <h5 className="title">{film.title}</h5>
          <ul className="list">
            <li>{film.original_language}</li>
            <li>{film.vote_average} rating</li>
            <li>{film.release_date}</li>
          </ul>
          <ul className="list">
            {genreList.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <p className="overview">{film.overview}</p>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 15px;
  .arrow {
    width: 10%;
    height: 15%;
    text-align: center;
    font-size: 1.2rem;
  }
  .movieContainer {
    width: 65%;
    margin: 10px auto;
  }
  img {
    width: 100%;
  }
  .title {
    text-align: center;
    font-size: 1.2rem;
  }
  .list {
    list-style-type: none;
    padding-left: 0px;
  }
  @media screen and (min-width: 768px) {
    .movieContainer {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr;
      border: 1px solid rgb(0, 0, 0, 0.1);
      box-shadow: 0px 2px 8px rgb(0, 0, 0, 0.1);
    }
    img {
      border: 2px solid #e3e3e3;
      border-radius: 18px;
      box-shadow: 0px 2px 8px rgb(0, 0, 0, 0.1);
    }
    .title {
      text-align: left;
      margin-top: 0px;
    }
    .info {
      grid-column: 2/3;
      grid-column: 2/3;
      margin-left: 15px;
    }
  }
`;
