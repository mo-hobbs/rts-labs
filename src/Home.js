import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h3>What would you like to do today?</h3>

      <p>
        <Link to="/search">Click Here</Link> to search the Hacker News Algolia
        API
      </p>

      <p>
        <Link to="/history">Click Here</Link> to see a list of your
        search history
      </p>
    </div>
  );
}

export default Home;
