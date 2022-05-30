import React, { useState } from "react";

import SearchResults from "./SearchResults";

function SearchForm({ handleSearch }) {

  const [formData, setFormData] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    handleSearch(formData);
    fetch(`http://hn.algolia.com/api/v1/search?query=${formData}`)
      .then((r) => r.json())
      // .then(data=>setSearchResults(data))
      .then((data) => setSearchResults(data));
    // on Submit add formData to the search History object, clear form and reset formData 
  }

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <h3>Search Hacker News API</h3>
        <input
          type="text"
          name="name"
          onChange={(e)=> setFormData(e.target.value)}
          value={formData.name}
          placeholder="Search term..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Search"
          className="submit"
        />
      </form>
      {searchResults ? <SearchResults searchResults={searchResults} /> : null}
    </div>
  );
}

export default SearchForm;
