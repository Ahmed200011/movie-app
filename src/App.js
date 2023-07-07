import React from "react";
import Header from "./header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddMovie from "./pages/add/AddMovie";
import Watch from "./pages/watchList/Watch";
import Watched from "./pages/watched/Watched";
import ContextProviders from "./context/Conte";

const App = () => {
  return (
    <div>
      <Router>
      <ContextProviders>
        <Header />
        <Routes>
          <Route path="/" element={<Watch/>}/>
          <Route path="watched" element={<Watched/>}/>
          <Route path="add-movie" element={<AddMovie/>}/>
        </Routes>
        </ContextProviders>
      </Router>
    </div>
  );
};

export default App;
