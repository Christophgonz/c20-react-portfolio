import React from 'react';
import { Pokezoo, RandomFunFacts, TravelWanderlust } from '../assets/images';

export default function Home() {
  return (
    <div>
      <div className='hero'>
        <div className='hero-content flex-col lg:flex-row'>
          <div className='text-center lg:text-left'>
            <h1 className='text-4xl font-bold'>Welcome to my portfolio!</h1>
            <p className='py-6'>
              Here's are some of the projects I have previously worked on.
            </p>
          </div>
          <div className='carousel rounded-box w-1/2'>
            <div id='slide1' className='carousel-item relative w-full'>
              <img src={Pokezoo} alt='placeholder' className='' />
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href='#slide3' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#slide2' className='btn btn-circle'>
                  ❯
                </a>
              </div>
            </div>
            <div id='slide2' className='carousel-item relative w-full'>
              <img src={RandomFunFacts} alt='placeholder' />
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href='#slide1' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#slide3' className='btn btn-circle'>
                  ❯
                </a>
              </div>
            </div>
            <div id='slide3' className='carousel-item relative w-full'>
              <img src={TravelWanderlust} alt='placeholder' />
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href='#slide2' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#slide1' className='btn btn-circle'>
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
