import React from "react";
import Home from "./pages/Home";
import { DataProvider } from "./DataContext";
import { GenreProvider } from "./GenreContext";
export default function App() {
  return (
    <DataProvider>
      <GenreProvider>
        <Home />
      </GenreProvider>
    </DataProvider>
  );
}
