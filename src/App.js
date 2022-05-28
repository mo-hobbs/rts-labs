import { Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./Home";
import Search from './Search';
import History from './History';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to RTS Labs | Hacker News Search App</h1>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="history" element={<History />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
