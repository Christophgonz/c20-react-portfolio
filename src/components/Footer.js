import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer footer-center p-10 text-base-content'>
      <div className='items-center grid-flow-col'>
        <Link className='col' to='https://github.com/Christophgonz'>
          GitHub
        </Link>
        <Link className='col' to='https://www.linkedin.com/in/christoph-gonz'>
          LinkedIn
        </Link>
      </div>
    </footer>
  );
}
