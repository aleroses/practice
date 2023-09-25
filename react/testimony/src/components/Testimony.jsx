import React from "react";
import ReactDOM from "react-dom/client";
import "../stylesheets/Testimony.css";

function Testimony(props) {
  return (
    <div className="section__testimony">
      <img
        className="img"
        src={require(`../images/testimony-${props.image}.png`)}
        alt={`Testimony ${props.name}`}
      />
      <div className="description">
        <p className="name">
          {props.name} en {props.country}
        </p>
        <p className="job-title">
          {props.jobtitle} en {props.company}
        </p>
        <p className="comment">"{props.comment}"</p>
      </div>
    </div>
  );
}

export { Testimony };
