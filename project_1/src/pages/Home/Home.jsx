import "./Home.css";

import { Link } from "react-router-dom";

import portfolioImg from "./../../assets/image/profile.png";
import seriveSite from "./../../assets/image/service_site.png";
import memoryGame from "./../../assets/image/memory_game.png";
import ecommerceSite from "./../../assets/image/e-commerce_site.png";
import analyticsSite from "./../../assets/image/analytics_site.png";
import "bootstrap/dist/css/bootstrap.css";

// you need to use react-router-dom in this page to be able to serve different pages on different endpoints

function Home() {
  return (
    <div style={{ backgroundColor: "PaleTurquoise" }}>
      <img
        src={portfolioImg}
        style={{ borderRadius: "50%", border: " 5px" }}
        width="250px"
        height="250px"
        alt="portfolioImg"
      />

      <h1>Destan Cakar</h1>
      <h2>Aspiring Software Engineer</h2>
      <div class="d-flex flex-column align-items-center justify-content-center">
        <div
          className="w-50 mb-3"
          style={{ backgroundColor: "SkyBlue", borderRadius: "5%" }}
        >
          <h3>About Me</h3>
          <ul>
            <li>I like working with full stack web development.</li>
            <li>I am interested in AI and it's role in the future.</li>
            <li>My favorite language is Phyton.</li>
            <li>I like puppies</li>
          </ul>
        </div>
        <div
          className="w-50 mb-3"
          style={{ backgroundColor: "PowderBlue", borderRadius: "5%" }}
        >
          <h3>My Experince:</h3>
          -I am currently taking SEG 3125 (Analysis and Design of User
          Interfaces) as part of my software engineering squence.
          <br />
          -you can find out more about this course through this link:
          <a href="https://catalogue.uottawa.ca/en/courses/seg/">SEG 3125</a>
        </div>
      </div>

      <div style={{ backgroundColor: "LightCyan", borderRadius: "5%" }}>
        <a href="https://catalogue.uottawa.ca/en/courses/seg/">
          <img
            src={seriveSite}
            class="bg-transparent m-1 p-1"
            style={{ borderRadius: "10%" }}
            width="250px"
            height="250px"
            alt="seriveSit"
          />
        </a>

        <Link to="/onhold">
          <img
            src={memoryGame}
            class="bg-transparent m-1 p-1"
            style={{ borderRadius: "10%" }}
            width="250px"
            height="250px"
            alt="memoryGame"
          />
        </Link>

        <Link to="onhold">
          <img
            src={ecommerceSite}
            class="bg-transparent m-1 p-1"
            style={{ borderRadius: "10%" }}
            width="250px"
            height="250px"
            alt="ecommerceSite"
          />
        </Link>

        <Link to="onhold">
          <img
            src={analyticsSite}
            class="bg-transparent m-1 p-1"
            style={{ borderRadius: "10%" }}
            width="250px"
            height="250px"
            alt="analyticsSite"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
