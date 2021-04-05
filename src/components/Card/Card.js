import React from "react";
import { CardContainer, CardImg, Overlay } from "./card.elements";

const Card = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const altTag = `${movie.title} thumb`;
  return (
    <CardContainer>
      <Overlay />
      <CardImg src={posterUrl} alt={altTag} />
    </CardContainer>
  );
};

export default Card;
