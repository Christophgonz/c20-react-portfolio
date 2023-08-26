import React from "react";
import portrait from "../assets/images/portrait.jpg";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div className="artboard">
        <div className="artboard phone-1">
          <img src={portrait} alt="Face of the Developer" className="" />
        </div>
        <p className="col-md-10">
          My name is Christopher Gonzales, an aspiring web developer. I am a
          recent graduate of the ASU FullStacks Bootcamp.
        </p>
      </div>
    </div>
  );
}
