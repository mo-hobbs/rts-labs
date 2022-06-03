import React from "react";

function SearchResults({ searchResults }) {
  const { hits, nbHits, query } = searchResults;


  // function renderResults() {
  //   console.log(hits)
  //   debugger
  // }

  function renderResults() {
    // console.log(hits);
    return Object.values(hits).map((r) => (
      <li key={r.id}>
        <a href={r.url} target="_blank" rel="noreferrer">
          {r.title}
        </a>
      </li>
    ));
  }

  return (
    <div>
      <button href="/history">See Search History</button>
      <h3>
        There are {nbHits} that match your query for {query}. These are the top
        20 results:
      </h3>
      {renderResults()}
    </div>
  );
}

export default SearchResults;
