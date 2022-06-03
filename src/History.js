import React from "react";

function History({ searchHistory }) {

  function displaySearchHistory() {
    if (searchHistory.length > 0) {
      return searchHistory.map((item) => <li key={item.index}>{item}</li>);
    }
  }

  return (
    <div>
      <h3>Search History</h3>
      {displaySearchHistory()}
    </div>
  );
};

export default History;
