import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header className='bg-accent text-center'>
      <div className='container mx-auto'>
        <div className='navbar'>
          <div className='flex flex-wrap navbar '>
            <Link to='/'>
              <button className='btn btn-primary text-xl'>Gonzales</button>
            </Link>
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
