import React from "react";

import { Routes, Route } from "react-router-dom";
import "./App.css";


import Home from "./Home";
import SearchForm from "./SearchForm";
import History from "./History";


function App() {


  return (
    <div className="App">
      <h1>Welcome to RTS Labs | Hacker News Search App</h1>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="search"
          element={<SearchForm />}
          // element={
          //   <InstantSearch searchClient={searchClient} indexName="HN_search">
          //     <SearchBox />
          //     <Hits />
          //   </InstantSearch>
          // }
        />
        <Route path="history" element={<History />} />
      </Routes>
    </div>
  );
}

// function Hit(props) {
//   return (
//     <article>
//       <h1>
//         <Highlight attribute="name" hit={props.hit} />
//       </h1>
//       <p>
//         <Highlight attribute="description" hit={props.hit} />
//       </p>
//       <p>
//         <Highlight attribute="categories" hit={props.hit} />
//       </p>
//     </article>
//   );
// }

// Hit.propTypes = {
//   hit: PropTypes.object.isRequired,
// };

export default App;
