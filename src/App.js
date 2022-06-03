import React, { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import SearchForm from "./SearchForm";
import History from "./History";


function App() {

  let searchHistory = [];

  function handleSearch(news) {
    const top20 = news.hits;
    // top20.forEach((hit) => (  
    //   <li>  
    //     {hit.title}  
    //   </li>  
    // ))
    // searchHistory.push([news.query]: top20)
    // console.log(top20);
    // setSearchHistory({...searchHistory, news});
    // console.log(searchHistory)
  };

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
          element={<SearchForm handleSearch={handleSearch} />}
        />

        <Route
          path="history"
          element={<History searchHistory={searchHistory} />}
        />
      </Routes>

    </div>
  );
}

export default App;
