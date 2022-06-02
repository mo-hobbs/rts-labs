import React, { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import SearchForm from "./SearchForm";
import History from "./History";

function App() {

  const [searchHistory, setSearchHistory] = useState([]);

  // function handleSearch(formData, hitsFromSearch) {
    //   console.log("search term "+ formData);
    // };
    
    function addToSearchHistory(searchResults) {
      setSearchHistory([...searchHistory, searchResults]);

  }

  return (
    <div className="App">
      <nav className="topnav">
        <Link to="/">Home</Link>

        <Link to="/search">Search</Link>

        <Link to="/history">History</Link>
      </nav>
      <h1>Welcome to RTS Labs | Hacker News Search App</h1>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="search"
          element={<SearchForm addToSearchHistory={addToSearchHistory} />}
        />
        <Route path="history" element={<History searchHistory={searchHistory}   />} />
      </Routes>
    </div>
  );
}

export default App;
