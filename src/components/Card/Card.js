import React from "react";
import { CardContainer, CardImg } from "./card.elements";

const Card = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`;
  const altTag = `${movie.title} poster`;
  return (
    <CardContainer>
      <CardImg src={posterUrl} alt={altTag} />
    </CardContainer>
  );
};

export default Card;
