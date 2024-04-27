import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import CourseSelector from "./components/courses/CourseSelector";
import Main from "./components/Main";
import CoursePage from "./components/CoursePage/CoursePage";
import MathGame from "./components/MathGame/MathGame.jsx";

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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
