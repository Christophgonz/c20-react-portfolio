import React from "react";

export default function Project({ link, image, name, title }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 justify-content-center">
      <a href={link}>
        <img src={image} alt={name} />
        <h3>{title}</h3>
      </a>
    </div>
  );
}
