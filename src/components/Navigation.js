import React from 'react';
import { Link } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation() {
  return (
    <div className='flex-auto navbar-end'>
      <ul className='join'>
        <li className='join-item btn'>
          <Link to='/c20-react-portfolio/about'>About</Link>
        </li>
        <li className='join-item btn'>
          <Link to='/c20-react-portfolio/portfolio'>Portfolio</Link>
        </li>
        <li className='join-item btn'>
          <Link to='/c20-react-portfolio/contact'>Contact</Link>
        </li>
        <li className='join-item btn'>
          <Link to='/c20-react-portfolio/resume'>Resume</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
