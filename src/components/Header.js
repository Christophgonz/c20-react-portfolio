import React from "react";
import Navigation from "./Navigation";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header className="bg-success-subtle text-center">
      <div className="">
        <h1 className="">Gonzales</h1>
        <div className="">
          <Navigation
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </header>
  );
}
