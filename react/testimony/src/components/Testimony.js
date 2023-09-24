import React from "react";
import "../stylesheets/Testimony.css";

function Testimony(props) {
  return (
    <React.Fragment>
      <img
        className="main__image-testimony"
        src={require(`../images/testimony-${props.image}.png`)}
        alt={`Picture ${props.name}`}
      />
      <section className="main__description-testimony">
        <p className="name">
          <strong>{props.name}</strong> en{" "}
          {props.country}
        </p>
        <p className="job-title">
          {props.jobtitle} en{" "}
          <strong>{props.company}</strong>
        </p>
        <p className="comment">"{props.comment}"</p>
      </section>
    </React.Fragment>
  );
}

export { Testimony };
