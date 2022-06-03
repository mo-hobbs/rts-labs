import React from "react";

function SearchResults({ searchResults }) {
  const { hits, nbHits, query } = searchResults;

  function renderResults() {
    if (hits) {
      return Object.values(hits).map((r) => (
        <li key={r.id}>
          <a href={r.url} target="_blank" rel="noreferrer">
            {r.title}
          </a>
        </li>
      ));
    } else {
    }
  }

  return (
    <div>
      <h3>
        There are {nbHits} that match your query for {query}. These are the top
        20 results:
      </h3>
      {renderResults()}
    </div>
  );
}

export default SearchResults;
