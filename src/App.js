import React from "react";
import Home from "./pages/Home";
import { DataProvider } from "./DataContext";
import { GenreProvider } from "./GenreContext";
import { QueryProvider } from "./QueryContext";
export default function App() {
  return (
    <QueryProvider>
      <DataProvider>
        <GenreProvider>
          <Home />
        </GenreProvider>
      </DataProvider>
    </QueryProvider>
  );
}
