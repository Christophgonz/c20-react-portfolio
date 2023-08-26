import React, { useState } from "react";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./Footer";
import Header from "./Header";

export default function PortfolioContainer() {
  return (
    <div className="bg-neutral justify-content">
      {/* We are passing the currentPage from state and the function to update it */}
      {/* Here we are calling the renderPage method which will return a component  */}
      <div className="container mx-auto"></div>
    </div>
  );
}
