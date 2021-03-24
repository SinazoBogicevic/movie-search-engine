import React from "react";
import MoviePage from "./MoviePage";
import SearchField from "./SearchField";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { DataProvider } from "./DataContext";
import { GenreProvider } from "./GenreContext";
export default function App() {
  return (
    <DataProvider>
      <GenreProvider>
        <Router>
          <Switch>
            <Route path="/moviePage" component={MoviePage}>
              <MoviePage />
            </Route>
            <Route exact path="/" component={SearchField}>
              <SearchField />
            </Route>
          </Switch>
        </Router>
      </GenreProvider>
    </DataProvider>
  );
}
