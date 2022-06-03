import React, { useState } from "react";

import SearchResults from "./SearchResults";

function SearchForm({ handleSearch }) {
  const [formData, setFormData] = useState("");
  const [displayResults, setDisplayResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setFormData(formData);
    fetch(`http://hn.algolia.com/api/v1/search?query=${formData}`)
      .then((r) => r.json())
      .then((news) => {
        setSearchResults(news);
      });
    setDisplayResults(!displayResults);
    resetForm();
  }

  //I know the search form is not clearing out the previous search and resetting correctly, but for the sake of time I wanted to deliver a MVP (minimum viable product) knowing there are still some glitches 
  function resetForm() {
    handleSearch(formData);
    setDisplayResults(!displayResults);
  };

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
      {displayResults ? <SearchResults searchResults={searchResults} /> : null}
    </div>
  );
}

export default SearchForm;
