import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqwuj_kIcz9eTQ4cnBpHJ0kyUPo57QiJ3KlQ&s"
        alt=""
        className="card-image"
      />
      <div className="card-content">
        <h2>Learn Figma – UI/UX Design Essential Training</h2>
        <div className="card-content-params">
          <p>Lesson: 6</p>
          <p>Student: 198</p>
          <p>Beginner</p>
        </div>
      </div>
      <div className="card-action">
        <button>Start Course</button>
        <span className="favorites">
          <img
            src="https://staging.svgrepo.com/show/22427/star.svg"
            alt="zvezda"
          />
        </span>
      </div>
    </div>
  );
};

export default Card;
