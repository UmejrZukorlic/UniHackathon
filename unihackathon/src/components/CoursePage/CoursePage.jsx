import React from "react";
import "./CoursePage.css";
import slikaMat from '../Pages/matematika.png'
import { useState } from "react";
import YouTube from 'react-youtube'
import Arrow from '../Pages/arrow.png'
import { Link } from 'react-router-dom'
const CoursePage = () => {

  const videoId = 'tHWoEJUhByk';

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const [collapse, setCollapse] = useState(false);

  const toggleCollapse = () => {
    setCollapse(!collapse);
  }


  return (
    <>
 
 
    <div>
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
          <button className="login">Log in</button>
          <button className="signup">Register</button>
        </div>
      </header>

      <div className="naslov">
        <h1><span style={{ color: 'red' }}>K</span>urs <span style={{ color: 'rgb(135, 135, 253)' }}>O</span>snovnih <span style={{ color: '#FDC726' }}>R</span>acunarskih <span style={{ color: '#F1E1FC' }}>O</span>peracija</h1>
        <img
          src={slikaMat}
          alt="slika"
        />
        <div className="naslovBtns">
          <Link to='/mathgame'>
        <button className="naslovBtn1">Igraj igricu</button></Link>
        
        <Link to='/mathquiz'>
        <button  className="naslovBtn2">Uradi kviz</button></Link></div>
      </div>
      <div>
        <div className="lekcije">
          <p>
            Kurs osnovnih računskih operacija iz matematike obuhvata
            fundamentalne matematičke koncepte i tehnike potrebne za uspešno
            rešavanje problema u računanju. Ovaj kurs se obično sastoji od
            sledećih tema:
          </p>
          <ul>
            <li>
              Sabiranje i oduzimanje: Učenje kako pravilno sabirati i oduzimati
              brojeve različitih veličina, uključujući i rad sa pozitivnim i
              negativnim brojevima.
            </li>
            <li>
              Množenje i deljenje: Razumevanje osnovnih tehnika množenja i
              deljenja, kao i primena ovih operacija na različite tipove brojeva
              (ceo brojevi, decimalni brojevi, razlomci)
            </li>
            <li>
              Redosled operacija: Naučiti pravila za redosled izvršavanja
              operacija (zagrada, množenje i deljenje, sabiranje i oduzimanje)
              kako bi se dobili tačni rezultati u složenijim matematičkim
              izrazima.
            </li>
            <li>
              Rad sa razlomcima: Upoznavanje sa operacijama nad razlomcima, kao
              što su sabiranje, oduzimanje, množenje i deljenje razlomaka, kao i
              konverzija između različitih oblika razlomaka.
            </li>
            <li>
              Procenti: Kako računati procente, uključujući procenat određenog
              broja, procenat povećanja ili smanjenja, kao i primene procenata u
              realnim situacijama poput popusta, poreza ili kamata.
            </li>
          </ul>
          <p>
            Ovaj kurs je osnova za razumevanje matematike na višem nivou i
            primenljiv je u mnogim svakodnevnim situacijama, od finansijskih
            transakcija do rešavanja problema u svakodnevnom životu.
          </p>
        </div>

        
     
        <section>
          <div>
            <p>Sekcija 1</p> <p>Osnove Brojeva</p>
            <img src={Arrow} alt="downarrow"  onClick={toggleCollapse}/>
          </div>   

          {collapse && (
          <div>
            <div>           
              <p>LEKCIJA 1</p>
              
              <p>
                Predstavljanje brojeva: celi brojevi, decimalni brojevi,
                pozitivni i negativni brojevi.
              </p> 
              
              <YouTube videoId={videoId} opts={opts} onReady={onReady} />

              <source />

            </div> 
           
            <div>
              <p>LEKCIJA 2</p>{" "}
              <p>
                Osnovne operacije: sabiranje, oduzimanje, množenje, deljenje.
              </p>
              <YouTube videoId={videoId} opts={opts} onReady={onReady} />

            </div>
          </div>
       )}  </section> 
        <section>
          <div>
            <p>Sekcija 2</p> <p>Rad sa razlomcima</p>
            <img src={Arrow} alt="downarrow"  onClick={toggleCollapse}/>
          </div>
          {collapse && (
          <div>
            <div>
              <p>LEKCIJA 3</p>{" "}
              <p>
                Razumevanje razlomaka i osnovne operacije sa razlomcima:
                sabiranje, oduzimanje, množenje, deljenje.
              </p>
               </div>  
            <div>
              <p>LEKCIJA 4</p>{" "}
              <p>
                Konverzija između različitih formata brojeva (npr. decimalni
                brojevi u razlomke).
              </p>
            </div>
          </div>
       )} </section>
        <section>
          <div>
            <p>Sekcija 3</p> <p>Procenti i verovatnoća</p>
            <img src={Arrow} alt="downarrow"  onClick={toggleCollapse}/>
          </div>
          {collapse && (
          <div>
            <div>
              <p>LEKCIJA 5</p>{" "}
              <p>
                Računanje procenata: osnove i primene u svakodnevnom životu
                (popusti, kamate).
              </p>
            </div>
            <div>
              <p>LEKCIJA 6</p>{" "}
              <p>
                Osnovni koncepti verovatnoće: jednostavne verovatnoćne situacije
                i eksperimenti.
              </p>
            </div>
          </div>
          )}</section>
        <section>
          <div>
            <p>Sekcija 4</p> <p>Praktične primene</p>
            <img src={Arrow} alt="downarrow"  onClick={toggleCollapse}/>

          </div>
          {collapse && (

          <div>
            <div>
              <p>LEKCIJA 7</p>{" "}
              <p>
                Rešavanje jednostavnih matematičkih problema iz svakodnevnog
                života koristeći osnovne računske operacije.
              </p>
            </div>
            <div>
              <p>LEKCIJA 8</p>{" "}
              <p>Vežbe za unapređenje brzine i tačnosti u računanju.</p>
            </div>
          </div>
          )}</section>
        <section>
          <div>
            <p>Sekcija 5</p> <p>Revizija </p>
          </div>

          <div>
            <div>
              <p>LEKCIJA 9</p>{" "}
              <p>
                Pregled gradiva i ponavljanje ključnih koncepta kroz
                interaktivne vežbe.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>);
}


export default CoursePage;
