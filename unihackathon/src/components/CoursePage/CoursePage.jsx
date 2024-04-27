/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./CoursePage.css";
const CoursePage = () => {
  return (
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
      <div className="bgContainer">
        <div className="container">
          <div className="header">
            <h1>Learn Figma – UI/UX Design Essential Training</h1>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqwuj_kIcz9eTQ4cnBpHJ0kyUPo57QiJ3KlQ&s"
              alt="slika"
            />
          </div>
          <div>
            <div>
              <p>
                Kurs osnovnih računskih operacija iz matematike obuhvata
                fundamentalne matematičke koncepte i tehnike potrebne za uspešno
                rešavanje problema u računanju. Ovaj kurs se obično sastoji od
                sledećih tema:
              </p>
              <ul>
                <li>
                  Sabiranje i oduzimanje: Učenje kako pravilno sabirati i
                  oduzimati brojeve različitih veličina, uključujući i rad sa
                  pozitivnim i negativnim brojevima.
                </li>
                <li>
                  Množenje i deljenje: Razumevanje osnovnih tehnika množenja i
                  deljenja, kao i primena ovih operacija na različite tipove
                  brojeva (ceo brojevi, decimalni brojevi, razlomci)
                </li>
                <li>
                  Redosled operacija: Naučiti pravila za redosled izvršavanja
                  operacija (zagrada, množenje i deljenje, sabiranje i
                  oduzimanje) kako bi se dobili tačni rezultati u složenijim
                  matematičkim izrazima.
                </li>
                <li>
                  Rad sa razlomcima: Upoznavanje sa operacijama nad razlomcima,
                  kao što su sabiranje, oduzimanje, množenje i deljenje
                  razlomaka, kao i konverzija između različitih oblika
                  razlomaka.
                </li>
                <li>
                  Procenti: Kako računati procente, uključujući procenat
                  određenog broja, procenat povećanja ili smanjenja, kao i
                  primene procenata u realnim situacijama poput popusta, poreza
                  ili kamata.
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
              </div>

              <div>
                <div>
                  <p>LEKCIJA 1</p>{" "}
                  <p>
                    Predstavljanje brojeva: celi brojevi, decimalni brojevi,
                    pozitivni i negativni brojevi.
                  </p>
                </div>
                <div>
                  <p>LEKCIJA 2</p>{" "}
                  <p>
                    Osnovne operacije: sabiranje, oduzimanje, množenje,
                    deljenje.
                  </p>
                </div>
              </div>
            </section>
            <section>
              <div>
                <p>Sekcija 2</p> <p>Rad sa razlomcima</p>
              </div>

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
            </section>
            <section>
              <div>
                <p>Sekcija 3</p> <p>Procenti i verovatnoća</p>
              </div>

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
                    Osnovni koncepti verovatnoće: jednostavne verovatnoćne
                    situacije i eksperimenti.
                  </p>
                </div>
              </div>
            </section>
            <section>
              <div>
                <p>Sekcija 4</p> <p>Praktične primene</p>
              </div>

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
            </section>
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
      </div>
    </div>
  );
};

export default CoursePage;
