import React from "react";
import Navigation from "./Navigation";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header className="bg-accent text-center">
      <div className="container mx-auto">
        <div className="navbar">
          <div className="flex flex-wrap navbar">
            <button className="navbar-start btn btn-secondary text-xl">
              Gonzales
            </button>
            <Navigation
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
