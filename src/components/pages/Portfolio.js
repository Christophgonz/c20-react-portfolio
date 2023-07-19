import React from "react";
import Project from "../Project";

const examples = [
  {
    link: "https://github.com/Christophgonz/c20-react-portfolio",
    image: "http://placekitten.com/g/200/300",
    name: "Test",
    title: "This is a test",
    id: "1asdf",
  },
  {
    link: "https://github.com/Christophgonz/c20-react-portfolio",
    image: "http://placekitten.com/g/200/301",
    name: "Project 2",
    title: "This is project 2",
    id: "2asdf",
  },
  {
    link: "https://github.com/Christophgonz/c20-react-portfolio",
    image: "http://placekitten.com/g/200/302",
    name: "",
    title: "This is a test for a long string of text that will wrap",
    id: "3asdf",
  },
  {
    link: "https://github.com/Christophgonz/c20-react-portfolio",
    image: "http://placekitten.com/g/200/302",
    name: "",
    title: "This is a test for a long string of text that will wrap",
    id: "4asdf",
  },
  {
    link: "https://github.com/Christophgonz/c20-react-portfolio",
    image: "http://placekitten.com/g/200/302",
    name: "",
    title: "This is a test for a long string of text that will wrap",
    id: "5asdf",
  },
];
export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="row text-center">
        {examples.map((example) => (
          <Project key={example.id} {...example} />
        ))}
      </div>
    </div>
  );
}
