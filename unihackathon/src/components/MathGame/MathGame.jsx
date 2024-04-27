import React, { useState, useEffect } from "react";
import "./mathGame.css";
const TIME = 30; // Initial game duration, in seconds

const MathGame = () => {
  const getInitialStatus = () => ({
    score: 0,
    max: 10,
    asked: 0,
    answered: 0,
    multiplier: 1,
    change: 0, // Added state to track change
  });

  const randomNumber = (max) => Math.floor(Math.random() * max);

  const generateProblem = (max) => {
    const a = randomNumber(max);
    const b = randomNumber(max - a);
    return { a, b, choices: getChoices(a, b, max) };
  };

  const getChoices = (a, b, max) => {
    const result = a + b;
    const choices = [result];

    while (choices.length < 4) {
      const choice = randomNumber(max);
      if (!choices.includes(choice)) {
        choices.push(choice);
      }
    }
    return shuffle(choices);
  };

  const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const [status, setStatus] = useState(getInitialStatus());
  const [selected, setSelected] = useState(-1);
  const [showSummary, setShowSummary] = useState(false);
  const [endTime, setEndTime] = useState(Date.now() + TIME * 1000);
  const [prev, setPrev] = useState(generateProblem(status.max));
  const [next, setNext] = useState(generateProblem(status.max));
  // Added state to track the current game state
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const remaining = Math.floor((endTime - Date.now()) / 1000);
      if (remaining <= 0) {
        clearInterval(timerInterval);
        setShowSummary(true);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [endTime]);

  const increaseScore = () => {
    const newStatus = { ...status };
    let newEndTime = endTime;
    let newMax = status.max;

    if (status.answered % 5 === 4) {
      newEndTime += 15000;
      newMax *= 2;
    }

    newStatus.multiplier = Math.min(newStatus.multiplier + 1, 5);
    newStatus.score += newMax * newStatus.multiplier;
    newStatus.asked += 1;
    newStatus.answered += 1;
    newStatus.max = newMax;

    // Calculate change in status
    const change = newStatus.score - status.score;
    newStatus.change = change;

    setStatus(newStatus);
    setEndTime(newEndTime);
  };

  const decreaseScore = () => {
    const newStatus = { ...status };
    newStatus.multiplier = 1;
    newStatus.score = Math.max(
      0,
      newStatus.score - Math.floor(newStatus.max * 0.25)
    );
    newStatus.asked += 1;

    // Calculate change in status
    const change = newStatus.score - status.score;
    newStatus.change = change;

    setStatus(newStatus);
  };

  const handleOnClick = (value) => {
    const { a, b } = prev;

    if (selected !== -1) return;

    if (value === a + b) {
      increaseScore();
    } else {
      decreaseScore();
    }

    setSelected(value);

    setTimeout(() => {
      setPrev(next);
      setNext(generateProblem(status.max));
      setSelected(-1);
    }, 1500);
  };

  // Update useEffect hook to reset the game when the playing state changes
  useEffect(() => {
    if (playing) {
      const newStatus = getInitialStatus();
      setStatus(newStatus);
      setShowSummary(false);
      setEndTime(Date.now() + TIME * 1000);
      setPrev(generateProblem(newStatus.max));
      setNext(generateProblem(newStatus.max));
      setPlaying(false);
    }
  }, [playing]);

  const handleOnPlayAgain = () => {
    // Set playing to true when PLAY AGAIN is clicked
    setPlaying(true);
  };

  const formatNumber = (number) =>
    number.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");

  return (
    <div className="game-container">
      {/* Implement Header component here */}
      <Header
        status={status}
        endTime={endTime}
        onTimerEnd={() => setShowSummary(true)}
      />
      <div className="body">
        {/* Implement Expression component here */}
        <Expression
          from={`${prev.a} + ${prev.b} = `}
          to={`${next.a} + ${next.b} = `}
          transitioning={selected !== -1}
        />
      </div>
      <div className="footer">
        <div className="container">
          {/* Implement MultipleChoice component here */}
          <MultipleChoice
            values={prev.choices}
            selected={selected}
            onClick={handleOnClick}
            correct={selected === prev.a + prev.b}
          />
        </div>
      </div>
      {/* Implement Summary component here */}
      {showSummary && (
        <Summary
          show={showSummary}
          score={status.score}
          onPlayAgain={handleOnPlayAgain}
        />
      )}
    </div>
  );
};

const Header = ({ status, endTime, onTimerEnd }) => {
  const formatNumber = (number) =>
    number.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");

  return (
    <div className="header">
      <div className="container">
        {/* Implement Timer component here */}
        <Timer endTime={endTime} onTimerEnd={onTimerEnd} />
        <div className="status">
          <div className="status-item max">up to {status.max}</div>
          <div className="status-item rate">
            {status.answered}/{status.asked}
          </div>
          <div className="status-item score">
            {formatNumber(status.score)}
            {status.multiplier > 1 && (
              <div className="multiplier">x{status.multiplier}</div>
            )}
            {/* Implement Change component here */}
            {status.change !== 0 && (
              <div className="change animated">
                {status.change > 0 ? "+" : ""}
                {status.change}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Timer = ({ endTime, onTimerEnd }) => {
  const [time, setTime] = useState({
    m: Math.floor((endTime - Date.now()) / 60000),
    s: Math.floor((endTime - Date.now()) / 1000) % 60,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = Math.floor((endTime - Date.now()) / 1000);
      setTime({ m: Math.floor(remaining / 60), s: remaining % 60 });

      if (remaining <= 0) {
        clearInterval(interval);
        onTimerEnd();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime, onTimerEnd]);

  const formatTime = (num) => (num < 10 ? "0" : "") + num;

  return (
    <div
      className={`timer ${
        time.m < 5 && time.m > 0 ? "animated bounceIn red" : ""
      }`}>
      {formatTime(time.m)} : {formatTime(time.s)}
    </div>
  );
};

const Expression = ({ from, to, transitioning }) => {
  return (
    <div className="expression">
      <div className={`from ${transitioning ? "transitioning" : ""}`}>
        <div className="text">{from}</div>
        <div className="box">?</div>
      </div>
      <div className="to">
        <div className="text">{to}</div>
        <div className="box">?</div>
      </div>
    </div>
  );
};

const MultipleChoice = ({ values, selected, correct, onClick }) => {
  return (
    <div className="multiple-choice">
      {values.map((res, index) => (
        <div
          key={index}
          className={`choice animated ${
            selected === res
              ? correct
                ? "tada positive"
                : "negative wobble"
              : ""
          }`}
          onClick={() => onClick(res)}>
          {res}
        </div>
      ))}
    </div>
  );
};

const Summary = ({ show, score, onPlayAgain }) => {
  return (
    <div
      className={`summary animated ${show ? "bounceInDown" : "bounceOutUp"}`}>
      <div className="title">
        <div className="big">GOOD JOB!</div>
        Your Score is:
      </div>
      {/* Implement Badge component here */}
      <Badge score={score} />
      <div className="button" onClick={onPlayAgain}>
        PLAY AGAIN
      </div>
    </div>
  );
};

const Badge = ({ score }) => {
  return (
    <div className="badge">
      <div className="score">{score}</div>
      {/* Implement SVG component here */}
      <svg viewBox="0 0 31.531 31.531">{/* SVG Path and Group */}</svg>
    </div>
  );
};

export default MathGame;
