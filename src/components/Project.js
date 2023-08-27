import React from "react";

export default function Project({ link, image, name, title }) {
  if (!image) {
    image = "https://via.placeholder.com/150";
  }
  return (
    <div className="card card-bordered justify-content center m-2">
      <div className="card-body">
        <figure className="">
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
