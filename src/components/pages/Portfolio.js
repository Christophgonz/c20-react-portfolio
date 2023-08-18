import React from 'react';
import Project from '../Project';

const examples = [
  {
    link: 'https://pokezoo6000.herokuapp.com/',
    image: 'http://placekitten.com/g/200/300',
    name: 'PokeZoo',
    title:
      'Pokezoo, an MVC where users can make their own personal collections of Pokemon',
    id: '1asdf',
  },
  {
    link: 'https://snl23.github.io/Random-fun-facts/',
    image: 'http://placekitten.com/g/200/301',
    name: 'Random Fun Facts',
    title:
      'Random Facts accompanied by various images of dogs, cats, and birds',
    id: '2asdf',
  },
  {
    link: 'https://github.com/Christophgonz/project-3',
    image: 'http://placekitten.com/g/200/302',
    name: 'Travel Wanderlust',
    title:
      'A MERN Application that allows users to help plan their dream vacations',
    id: '3asdf',
  },
  {
    link: 'https://github.com/Christophgonz/c20-react-portfolio',
    image: 'http://placekitten.com/g/200/302',
    name: '',
    title: 'This is a test for a long string of text that will wrap',
    id: '4asdf',
  },
  {
    link: 'https://github.com/Christophgonz/c20-react-portfolio',
    image: 'http://placekitten.com/g/200/302',
    name: '',
    title: 'This is a test for a long string of text that will wrap',
    id: '5asdf',
  },
];
export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className='row text-center'>
        {examples.map((example) => (
          <Project key={example.id} {...example} />
        ))}
      </div>
    </div>
  );
}
