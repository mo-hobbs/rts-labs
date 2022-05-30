import React, { useEffect } from 'react';

function SearchResults({ searchResults }) {


    fetch(`http://hn.algolia.com/api/v1/search?query=${searchResults}`)
      .then((r) => r.json())
      // .then(data=>setSearchResults(data))
      .then((data) => console.log(data));
  
  return (
    <div>
      <h3>Search Results</h3>
    </div>
  )
};

export default SearchResults;