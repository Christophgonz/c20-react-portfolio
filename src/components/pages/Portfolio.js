import React from "react";
import Project from "../Project";
import Pokezoo from "../assets/images/Pokezoo.png";
import RandomFunFacts from "../assets/images/RandomFunFacts.png";
import TravelWanderlust from "../assets/images/TravelWanderlust.png";

const examples = [
  {
    link: "https://github.com/Christophgonz/Zookeeper",
    image: Pokezoo,
    name: "PokeZoo",
    title:
      "Pokezoo, an MVC where users can make their own personal collections of Pokemon",
    id: "1asdf",
  },
  {
    link: "https://snl23.github.io/Random-fun-facts/",
    image: RandomFunFacts,
    name: "Random Fun Facts",
    title:
      "Random Facts accompanied by various images of dogs, cats, and birds",
    id: "2asdf",
  },
  {
    link: "https://github.com/Christophgonz/project-3",
    image: TravelWanderlust,
    name: "Travel Wanderlust",
    title:
      "A MERN Application that allows users to help plan their dream vacations",
    id: "3asdf",
  },
  {
    link: "https://github.com/Christophgonz/social-network-api",
    name: "Social Network API",
    title: "A RESTful API for a social network web application",
    id: "4asdf",
  },
  {
    link: "https://github.com/Christophgonz/c19-text-editor",
    name: "Text Editor",
    title: "A text editor that allows users to save and edit text files",
    id: "5asdf",
  },
  {
    link: "https://github.com/Christophgonz/c12-employee-tracker",
    name: "Employee Tracker",
    title:
      "A command-line application that allows users to manage a company's employee database",
    id: "6asdf",
  },
];
export default function Portfolio() {
  return (
    <div className="py-4">
      <div className="grid text-center">
        {examples.map((example) => (
          <Project key={example.id} {...example} />
        ))}
      </div>
    </div>
  );
}
