import React from "react";
import Card from "./Card";
import "./courseSelector.css";
const CourseSelector = () => {
  return (
    <div className="courseSelector">
      <h1 className="naslov">
        NASA PREDAVANJA PRATE DJECA <span className="blue">OD I DO IV</span>{" "}
        RAZREDA
      </h1>

      <div className="filter">
        <p>Predmeti</p>
        <div className="selector">
          <p>I Razred</p>
          <p>II Razred</p>
          <p>III Razred</p>
          <p>IV Razred</p>
        </div>
      </div>
      <div className="predmeti">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CourseSelector;
