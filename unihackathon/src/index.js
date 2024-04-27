import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import CourseSelector from "./components/courses/CourseSelector";
import Main from "./components/Main";
import CoursePage from "./components/CoursePage/CoursePage";
import Register from "../src/components/Pages/Register";
import Login from "../src/components/Pages/Login";
import MathGame from "./components/MathGame/MathGame";
import MathQuiz from "./components/MathQuiz/MathQuiz";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <CourseSelector />
            </>
          }
        />
        <Route path="/predavanje" element={<CoursePage />} />
        <Route path="/mathgame" element={<MathGame />} />
        <Route path="/mathquiz" element={<MathQuiz />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
