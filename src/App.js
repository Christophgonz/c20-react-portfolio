import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => (
  <Router>
    <PortfolioContainer />
  </Router>
);

export default App;
