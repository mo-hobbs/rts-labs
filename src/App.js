import React, { useState, useEffect } from 'react';

import { Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./Home";
import SearchForm from './SearchForm';
import SearchResults from "./SearchResults";
import History from './History';

function App() {

  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);


  function handleSearch(searchText) {
    setSearchResults(searchText);
    setSearchHistory([...searchHistory, searchText])
    setShowSearchResults(!showSearchResults);
  };


  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to RTS Labs | Hacker News Search App</h1>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="search" element={<SearchForm handleSearch={handleSearch} />} />
        <Route path="history" element={<History searchResults={searchResults} />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
