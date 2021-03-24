import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DataContext } from "./DataContext";

export default function MovieCard({ movie, handleDetail }) {
  const [state, setState] = useContext(DataContext);

  const handleClick = (id) => {
    const singleMovie = handleDetail(movie.id);
    setState(singleMovie);
  };

  return (
    <Card className="card-list" onClick={() => handleClick(movie.id)}>
      <Link
        to="/moviePage"
        style={{ textDecoration: "none", color: "#0000ff" }}
      >
        <img
          src={
            "https://image.tmdb.org/t/p/w185_and_h278_bestv2/" +
            movie.poster_path
          }
          alt={movie.title + " poster"}
        />
        <h5>{movie.title}</h5>
        <p>{movie.release_date}</p>
        <div className="rating">{movie.vote_average}</div>
      </Link>
    </Card>
  );
}
const Card = styled.div`
  position: relative;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  background-color: #fffff;
  width: 65%;
  margin: 0 auto 12px;
  border-radius: 8px;
  border: 1px solid #e3e3e3;
  box-shadow: 0px 2px 8px rgb(0, 0, 0, 0.1);
  img {
    width: 100%;
    height: 50vh;
  }
  h5 {
    margin-bottom: 0px;
  }
  p {
    margin-top: 2px;
  }
  .rating {
    text-align: center;
    position: absolute;
    bottom: 22%;
    left: 8%;
    width: 35px;
    height: 35px;
    border: 1px solid white;
    color: white;
    border-radius: 50%;
    background-color: black;
  }
`;
