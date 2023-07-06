import React from "react";
import Header from "./header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddMovie from "./pages/add/AddMovie";
import Watch from "./pages/watchList/Watch";
import Watched from "./pages/watched/Watched";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Watch/>}/>
          <Route path="watched" element={<Watched/>}/>
          <Route path="add-movie" element={<AddMovie/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
