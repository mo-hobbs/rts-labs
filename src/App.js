import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import SearchForm from "./SearchForm";
import History from "./History";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";



function App() {
  const searchClient = algoliasearch(
    "SFLFN7IUDA",
    "121e4ca53436b8bd884ba9a4510fe93b"
  );

  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  function handleSearch(searchText) {
    setSearchResults(searchText);
    setSearchHistory([...searchHistory, searchText]);
    setShowSearchResults(!showSearchResults);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to RTS Labs | Hacker News Search App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="search"
            // element={<SearchForm handleSearch={handleSearch} />}
            element={
              <InstantSearch
                searchClient={searchClient}
                indexName="demo_ecommerce"
              >
                <SearchBox />
                <Hits />
              </InstantSearch>
            }
          />
          <Route
            path="history"
            element={<History searchResults={searchResults} />}
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
