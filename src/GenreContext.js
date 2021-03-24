import React, { createContext, useState } from "react";

const GenreContext = createContext([{}, () => {}]);

const GenreProvider = (props) => {
  const [genres, setGenres] = useState({});

  return (
    <GenreContext.Provider value={[genres, setGenres]}>
      {props.children}
    </GenreContext.Provider>
  );
};

export { GenreContext, GenreProvider };
