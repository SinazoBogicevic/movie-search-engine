import React, { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Search from "../components/Search/Search";
import Movies from "../components/MoviesList/Movies";
import { Spinner } from "../components/spinner/Spinner";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Nav />
          <Hero />
          <Search />
          <Movies />
        </div>
      )}
    </>
  );
};

export default Home;
