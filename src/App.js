import React from "react";

import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import SearchForm from "./SearchForm";
import History from "./History";

// import algoliasearch from "algoliasearch/lite";
// import {
//   InstantSearch,
//   Hits,
//   SearchBox,
//   // Configure,
//   // DynamicWidgets,
//   // RefinementList,
//   // Pagination,
//   Highlight,
// } from "react-instantsearch-dom";
// import { InstantSearch } from 'react-instantsearch-hooks';

// import PropTypes from "prop-types";

function App() {
  // const searchClient = algoliasearch(
  //   "SFLFN7IUDA",
  //   "121e4ca53436b8bd884ba9a4510fe93b"
  // );

  // const index = searchClient.initIndex("HN_search");


  // index.search("query string").then(({ hits }) => {
  //   console.log(hits);
  // });

  // const objects = [
  //   {
  //     objectID: 1,
  //     created_at: "",
  //     author: "",
  //     title: "",
  //     url: "",
  //     text: null,
  //     points: null,
  //     parent_id: null,
  //     children: [],
  //   }
  // ];

  // const [showSearchResults, setShowSearchResults] = useState(false);
  // const [searchResults, setSearchResults] = useState("");
  // const [searchHistory, setSearchHistory] = useState([]);

  // function handleSearch(searchText) {
  //   setSearchResults(searchText);
  //   setSearchHistory([...searchHistory, searchText]);
  //   setShowSearchResults(!showSearchResults);
  // }

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
