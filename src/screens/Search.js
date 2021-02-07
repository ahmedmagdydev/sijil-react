import React, { useState } from "react";
import { hot } from "react-hot-loader";
import SearchForm from "../components/search/SearchForm";
import Container from "react-bootstrap/Container";
import SearchResults from "../components/search/SearchResults";

function Search() {
  const [searchView, setSearchView] = useState("search-form");
  return (
    <Container>
      {searchView == "search-form" && (
        <SearchForm
          onShowSearchResults={() => setSearchView("search-results")}
        />
      )}
      {searchView == "search-results" && <SearchResults />}
    </Container>
  );
}

// eslint-disable-next-line no-undef
export default hot(module)(Search);
