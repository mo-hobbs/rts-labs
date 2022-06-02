import React from 'react';

function SearchResults({ searchResults, formData }) {

  
  console.log(searchResults);



  function renderResults() {
    return Object.values(searchResults).map((r) => (
      <p><a href={r.url} target="_blank" rel="noreferrer">{r.title}</a></p>
    ));
  }

  return (
    <div>
      <h3>Top {searchResults.length} Hacker News articles related to your search for <em>{formData}</em></h3>
      {renderResults()}
      {/* {searchResults.forEach((r)=> {
        return (
          <p>Title: {r.title}</p>
        );
      })} */}
      
      {/* {const listOfResults = searchResults.hits.map(hit=> <p>`${hit.name}`</p>)} */}
    </div>
  )
};

export default SearchResults;