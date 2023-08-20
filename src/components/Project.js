import React from "react";

export default function Project({ link, image, name, title }) {
  return (
    <div className="card card-bordered justify-content center">
      <div className="card-body">
        <figure className="image is-4by3">
          <img src={image} alt={name} />
        </figure>
        <h3 className="card-title">{name}</h3>
        <p>{title}</p>
        <a className="btn" href={link}>
          Take me there!
        </a>
      </div>
    </div>
  );
}
