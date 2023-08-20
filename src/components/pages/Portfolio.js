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
];
export default function Portfolio() {
  return (
    <div>
      <div className="grid text-center">
        {examples.map((example) => (
          <Project key={example.id} {...example} />
        ))}
      </div>
    </div>
  );
}
