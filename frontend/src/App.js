import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./features/Home";
import Generate from "./features/Generate"; // Import the Generate component
import Navb from "./features/Navb"; // Import the Navb component
import Blank from './features/Blank'

function App() {
  return (
    <Router>
      <div className="App">
        <Navb />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/blank" element={<Blank />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
