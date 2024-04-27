import React, { useState } from "react";
import "./MathQuiz.css";

const MathQuiz = () => {
  const questions = [
    {
      questionText: "Koilko je 2+2?",
      answerOptions: [
        { answerText: "A) 3", isCorrect: false },
        { answerText: "B) 10", isCorrect: false },
        { answerText: "C) 4", isCorrect: true },
        { answerText: "D) 22", isCorrect: false },
      ],
    },
    {
      questionText: "Izračunaj razliku brojeva 14 i 5.",
      answerOptions: [
        { answerText: "A) 15", isCorrect: false },
        { answerText: "B) 9", isCorrect: true },
        { answerText: "C) 29", isCorrect: false },
        { answerText: "D) 145", isCorrect: false },
      ],
    },
    {
      questionText: "koliko je 7-1?",
      answerOptions: [
        { answerText: "A) 6", isCorrect: true },
        { answerText: "B) 17", isCorrect: false },
        { answerText: "C) 22", isCorrect: false },
        { answerText: "D) 2", isCorrect: false },
      ],
    },
    {
      questionText: "koliko je 3+3+1?",
      answerOptions: [
        { answerText: "A) 1", isCorrect: false },
        { answerText: "B) 4", isCorrect: false },
        { answerText: "C) 6", isCorrect: false },
        { answerText: "D) 7", isCorrect: true },
      ],
    },
    {
      questionText: "Izračunaj zbir 5 i 15",
      answerOptions: [
        { answerText: "A) 515", isCorrect: false },
        { answerText: "B) 124", isCorrect: false },
        { answerText: "C) 20", isCorrect: true },
        { answerText: "D) 10", isCorrect: false },
      ],
    },
    {
      questionText: "Koilko je 2+2?",
      answerOptions: [
        { answerText: "A) 3", isCorrect: false },
        { answerText: "B) 10", isCorrect: false },
        { answerText: "C) 4", isCorrect: true },
        { answerText: "D) 22", isCorrect: false },
      ],
    },
    {
      questionText: "Izračunaj razliku brojeva 14 i 5.",
      answerOptions: [
        { answerText: "A) 15", isCorrect: false },
        { answerText: "B) 9", isCorrect: true },
        { answerText: "C) 29", isCorrect: false },
        { answerText: "D) 145", isCorrect: false },
      ],
    },
    {
      questionText: "koliko je 7-1?",
      answerOptions: [
        { answerText: "A) 6", isCorrect: true },
        { answerText: "B) 17", isCorrect: false },
        { answerText: "C) 22", isCorrect: false },
        { answerText: "D) 2", isCorrect: false },
      ],
    },
    {
      questionText: "koliko je 3+3+1?",
      answerOptions: [
        { answerText: "A) 1", isCorrect: false },
        { answerText: "B) 4", isCorrect: false },
        { answerText: "C) 6", isCorrect: false },
        { answerText: "D) 7", isCorrect: true },
      ],
    },
    {
      questionText: "Izračunaj zbir 5 i 15",
      answerOptions: [
        { answerText: "A) 515", isCorrect: false },
        { answerText: "B) 124", isCorrect: false },
        { answerText: "C) 20", isCorrect: true },
        { answerText: "D) 10", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <h2>Rezultat</h2>
          <h3>Ukupan broj pitanja: {questions.length}</h3>
          <div className="rightAnwsers">
            <p>
              <img
                src="https://raw.githubusercontent.com/JoaoAlisonTI/quiz-app/f25acca84ab12c3601ec1ca7bb1c514a57b19034/public/check-icon.svg"
                alt="Ícone de marcação correta"
              />
              Tačni odgovori:
            </p>
            <span>{score}</span>
          </div>
          <div className="wrongAnwsers">
            <p>
              <img
                src="https://raw.githubusercontent.com/JoaoAlisonTI/quiz-app/f25acca84ab12c3601ec1ca7bb1c514a57b19034/public/x-icon.svg"
                alt="Ícone de marcação incorreta"
              />
              Pogrešni odgovori:
            </p>
            <span>{questions.length - score}</span>
          </div>
          <div className="messages">
            {score >= 3 ? (
              <img
                className="conffetiEffect"
                src="https://github.com/JoaoAlisonTI/quiz-app/blob/main/public/conffeti.gif?raw=true"
                alt="konfeti"
              />
            ) : (
              <h1 className="messageResult">
                Niste tačno odgovorili na mnogo pitanja
              </h1>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Pitanje{currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              <h2>{questions[currentQuestion].questionText}</h2>
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect)
                  }>
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default MathQuiz;
