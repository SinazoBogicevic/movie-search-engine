import React from "react";
import Home from "./pages/Home";
import {Switch, Route} from "react-router-dom"
import { QueryProvider } from "./QueryContext";
import { DataProvider } from "./DataContext";
import { PageProvider } from "./PageContext";
import Details from "./pages/Details";
export default function App() {
  return (
    <QueryProvider>
      <DataProvider>
        <PageProvider>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:title/:id" component={Details}/>
          </Switch>
        </PageProvider>
      </DataProvider>
    </QueryProvider>
  );
}
