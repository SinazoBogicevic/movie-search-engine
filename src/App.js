import React from "react";
import Home from "./pages/Home";
import { QueryProvider } from "./QueryContext";
import { DataProvider } from "./DataContext";
import { PageProvider } from "./PageContext";
export default function App() {
  return (
    <QueryProvider>
      <DataProvider>
        <PageProvider>
          <Home />
        </PageProvider>
      </DataProvider>
    </QueryProvider>
  );
}
