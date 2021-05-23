import React from "react";
import {LinkUI} from "../../GlobalStyles";
import { CardContainer, CardImg, Overlay } from "./card.elements";

const Card = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const altTag = `${movie.title} thumb`;
  const title = movie.title;
  const id = movie.id;
  return (
    <CardContainer>
      <LinkUI to={`/details/${title}/${id}`}>
      <Overlay />
      <CardImg src={posterUrl} alt={altTag} />
      </LinkUI>
    </CardContainer>
  );
};

export default Card;
