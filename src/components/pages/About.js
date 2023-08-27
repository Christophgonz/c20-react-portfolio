import React from 'react';
import portrait from '../assets/images/portrait.jpg';

export default function About() {
  return (
    <div className='hero'>
      <div className='hero-content flex-col lg:flex-row'>
        <img
          src={portrait}
          alt='Face of the Developer'
          className='max-w-sm rounded-lg shadow-2x1'
        />
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>About Me</h1>
          <p className='py-6'>
            My name is Christopher Gonzales, an aspiring web developer. I am a
            recent graduate of the ASU FullStacks Bootcamp. I am a huge fan of
            anything nerdy or geeky. I built my PC, love tabletop and card
            games, and enjoy learning and experimenting with coding and new
            technology.
          </p>
        </div>
      </div>
    </div>
  );
}
