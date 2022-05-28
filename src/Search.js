import React, { useState, useEffect } from "react";

function Search() {

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/items/1")
    .then(r=>r.json())
    // .then(data=>setSearchResults(data))
    .then(data=>console.log(data))
  }, [])
  return (
    <div>
      <h3>Search</h3>
      
    </div>
  )
}

export default Search;