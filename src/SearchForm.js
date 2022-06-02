import React, { useState } from "react";

import SearchResults from "./SearchResults";



function SearchForm({ handleSearch }) {
  const [formData, setFormData] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayResults, setDisplayResults] = useState(false);

  const [searchHistory, setSearchHistory] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setFormData(formData);
    fetch(`http://hn.algolia.com/api/v1/search?query=${formData}`)
      .then((r) => r.json())
      .then(({ hits }) => setSearchResults(hits));
    setDisplayResults(!displayResults);
    setSearchHistory({ ...searchHistory, [formData]: searchResults });
  }

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <h3>Search Hacker News API</h3>
        <input
          type="text"
          name="name"
          onChange={(e) => setFormData(e.target.value)}
          value={formData.name}
          placeholder="Search term..."
          className="input-text"
        />
        <br />
        <input type="submit" name="submit" value="Search" className="submit" />
      </form>
      <br></br>
      <button href="/history">Search History</button>
      {displayResults ? (
        <SearchResults searchResults={searchResults} formData={formData} />
      ) : null}
    </div>
  );
}

export default SearchForm;
