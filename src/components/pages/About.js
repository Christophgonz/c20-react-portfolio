import React from "react";
import portrait from "../assets/images/portrait.jpg";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div className="row">
        <img src={portrait} alt="" className="col-md-2" />
        <p className="col-md-10">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet
          diam tortor, id consequat mauris ullamcorper eu. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Pellentesque et dui id justo finibus sollicitudin at et metus. Ut
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet
          diam tortor, id consequat mauris ullamcorper eu. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Pellentesque et dui id justo finibus sollicitudin at et metus. Ut
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet
          diam tortor, id consequat mauris ullamcorper eu. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Pellentesque et dui id justo finibus sollicitudin at et metus. Ut
        </p>
      </div>
    </div>
  );
}
