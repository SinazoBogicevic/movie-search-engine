import React from "react";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Search from "../components/Search/Search";
import Movies from "../components/MoviesList/Movies";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Search />
      <Movies />
    </>
  );
}
