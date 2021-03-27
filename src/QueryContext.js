import React, { createContext, useState } from "react";

export const QueryContext = createContext();

export const QueryProvider = (props) => {
  const [query, setQuery] = useState("");

  return (
    <QueryContext.Provider value={[query, setQuery]}>
      {props.children}
    </QueryContext.Provider>
  );
};
