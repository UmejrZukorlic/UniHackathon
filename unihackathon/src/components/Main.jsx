import React from "react";
import style from "../App.css";
import Img from "../pics/kid.png";
import Hat from "../pics/hat.png";
import Star from "../pics/star.png";
import Teacher from "../pics/teacher.png";
import Kids from "../pics/kids.png";

function Main() {
  return (
    <>
      <header>
        <h2>PixelLearning</h2>

        <nav>
          <ul>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <div>
          <button className="login">Log in</button>
          <button className="signup">Register</button>
        </div>
      </header>

      <main>
        <div className="landing">
          <h1>Embark on a Learning Adventure Online</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Nesciunt ullam deleniti quasi ipsum repellat exercitationem dolore
            repellat exercitationem <br />
          </p>
          <div className="mainBtns">
            <button className="mainBtn1">Explore more</button>
            <button className="mainBtn2">Financial Aid</button>
          </div>
        </div>
        <img src={Img} alt="kid3d" />

        {/* <div className="icons">
          <img src={Star} alt="" className="icon1" />
          <img src={Hat} alt="" className="icon2" />
          <img src={Teacher} alt="" className="icon3" />
        </div> */}
      </main>

      <div className="main2">
        <img src={Kids} alt="" />
        <div className="main2-content">
          <h2>
            Our online education is <br />
            smart and effective.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Sit rem sint incidunt cupiditate porro recusandae voluptas
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatum, odio? <br />
            Sit rem sint incidunt cupiditate porro recusandae voluptas{" "}
          </p>

          <button className="main2btn">Get Started</button>
        </div>
      </div>
    </>
  );
}

export default Main;
