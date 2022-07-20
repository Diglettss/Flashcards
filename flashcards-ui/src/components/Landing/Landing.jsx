import React from "react";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="hero">
        <div className="hero-img">
          <img
            className="study-img"
            src={"/src/study_hero.jpeg"}
            alt="study-img"
          />
        </div>
        <div className="message">
          <h1>Flashy</h1>
          <p>Helping you study...blah blah</p>
        </div>
      </div>
    </div>
  );
}
