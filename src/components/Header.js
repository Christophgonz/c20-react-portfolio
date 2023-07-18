import React from "react";
import Navigation from "./Navigation";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header className="container bg-success-subtle">
      <div className="row justify-text-end">
        <h1 className="col-8">Gonzales</h1>
        <div className="col-4">
          <Navigation
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </header>
  );
}
