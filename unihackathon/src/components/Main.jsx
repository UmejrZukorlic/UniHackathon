/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Img from "../pics/kid.png";
import Kids from "../pics/kids.png";
import "../App.css";
import { Link } from 'react-router-dom'

function Main() {
  return (
    <>
      <header>
        <h2>PixelLearning</h2>

        <nav>
          <ul>
            <li>
              <a href="#">Predmeti</a>
            </li>
            <li>
              <a href="#">Liderboard</a>
            </li>
            <li>
              <a href="#">Info</a>
            </li>
          </ul>
        </nav>
        <div>
        <Link to='/login'><button className="login">Log in</button></Link>
          <Link to='/register'> <button className="signup">Register</button></Link>
        </div>
      </header>

      <main>
        <div className="landing">
          <h1>Krenite u Online Avanturu Učenja</h1>
          <p>
            Naša online platforma za učenje nudi pristup interaktivnim lekcijama
            i resursima, prilagođenim tvojim potrebama i interesovanjima. Uči
            fleksibilno i efikasno, gde god da se nalaziš, uz podršku stručnih
            mentora. <br />
          </p>
          <div className="mainBtns">
            <Link to='/predavanje'>
            <button className="mainBtn1">Predavanja</button></Link>
            <button className="mainBtn2">Rang Lista</button>
          </div>
        </div>
        <img src={Img} alt="kid3d" />
      </main>

      <div className="main2">
        <img src={Kids} alt="" />
        <div className="main2-content">
          <h2>Naša online edukacija je pametna i efikasna.</h2>
          <p>
            Naša online platforma za učenje nudi pristup interaktivnim lekcijama
            i resursima, prilagođenim tvojim potrebama i interesovanjima. Uči
            fleksibilno i efikasno, gde god da se nalaziš, uz podršku stručnih
            mentora.
          </p>

          <button className="main2btn">Započni Avanturu</button>
        </div>
      </div>
    </>
  );
}

export default Main;
