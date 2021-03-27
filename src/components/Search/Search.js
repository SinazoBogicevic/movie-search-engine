import React, { useState, useContext } from "react";
import { QueryContext } from "../../QueryContext";
import {
  Container,
  Form,
  SearchContainer,
  SearchIcon,
  InputContainer,
  Input,
  Label,
} from "./search.elements";

const Search = () => {
  const [query, setQuery] = useContext(QueryContext);

  const searchApi = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form>
        <SearchContainer onSubmit={searchApi}>
          <SearchIcon onSubmit={searchApi} />
          <InputContainer>
            <Input
              type="text"
              name="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
              placeholder="Search"
              autoComplete="off"
            />
            {/** 
            <Label htmlFor="text" id="search">
              search movie
            </Label>
            */}
          </InputContainer>
        </SearchContainer>
      </Form>
    </Container>
  );
};

export default Search;
