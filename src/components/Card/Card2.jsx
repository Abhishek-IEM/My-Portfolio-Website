import React from "react";
import "./Card2.css";

function Card({ title, image, link }) {
  return (
    <div className="card">
      <h1>{title}</h1>
      <div className="hovercard">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} />
        </a>
      </div>
    </div>
  );
}

export default Card;
