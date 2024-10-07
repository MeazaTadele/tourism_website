import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from './pages/aboutpage';
import Home from './pages/homePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
