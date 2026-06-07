import "./home.css";

import { Link } from "react-router-dom";

import portfolioImg from "./../../assets/image/profile.png";
import seriveSite from "./../../assets/image/service_site.png";
import memoryGame from "./../../assets/image/memory_game.png";
import ecommerceSite from "./../../assets/image/e-commerce_site.png";
import analyticsSite from "./../../assets/image/analytics_site.png";

// you need to use react-router-dom in this page to be able to serve different pages on different endpoints

function Home() {
  return (
    <div
      className="bg-transparent m-2 p-2"
      style={{ backgroundColor: "PaleTurquoise" }}
    >
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
          className="w-50 mb-3 pb-1 mx-auto"
          style={{ backgroundColor: "SkyBlue", borderRadius: "20px" }}
        >
          <h3>About Me</h3>
          <ul className="mb-0">
            <li style={{ marginBottom: "0" }}>
              I enjoy building responsive and interactive web applications.
            </li>
            <li style={{ marginBottom: "0" }}>
              I am passionate about AI and its impact on the general public.
            </li>
            <li style={{ marginBottom: "0" }}>
              My favorite programming language to work with is Python.
            </li>
          </ul>
        </div>
        <div
          className="w-50 mb-3"
          style={{ backgroundColor: "PowderBlue", borderRadius: "20px" }}
        >
          <h3>My Experince:</h3>
          <ul className="mb-0">
            <li>
              I am currently taking SEG 3125 (Analysis and Design of User
              Interfaces) as part of my software engineering squence.
            </li>
            <li>
              You can find out more about this course through this link:{" "}
              <a
                href="https://catalogue.uottawa.ca/en/courses/seg/"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                SEG 3125
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{ backgroundColor: "LightCyan", borderRadius: "20px" }}
        className="p-3"
      >
        <h3>Projects:</h3>
        <div className="row justify-content-center">
          <div className="col-6 col-md-3 d-flex flex-column align-items-center mb-3">
            <a href="https://service-website-3ew3.vercel.app/">
              <img
                src={seriveSite}
                className="img-fluid rounded"
                style={{ width: "250px", height: "180px", objectFit: "cover" }}
                alt="seriveSite"
              />
            </a>

            <p>A Service Site</p>
          </div>

          <div className="col-6 col-md-3 d-flex flex-column align-items-center mb-3">
            <Link to="/onhold">
              <img
                src={memoryGame}
                className="img-fluid rounded"
                style={{ width: "250px", height: "180px", objectFit: "cover" }}
                alt="memoryGame"
              />
            </Link>
            <p>Memory Game</p>
          </div>

          <div className="col-6 col-md-3 d-flex flex-column align-items-center mb-3">
            <Link to="/onhold">
              <img
                src={ecommerceSite}
                className="img-fluid rounded"
                style={{ width: "250px", height: "180px", objectFit: "cover" }}
                alt="ecommerceSite"
              />
            </Link>
            <p>An E-commerce Site</p>
          </div>

          <div className="col-6 col-md-3 d-flex flex-column align-items-center mb-3">
            <Link to="/onhold">
              <img
                src={analyticsSite}
                className="img-fluid rounded"
                style={{ width: "250px", height: "180px", objectFit: "cover" }}
                alt="analyticsSite"
              />
            </Link>
            <p>An Analytics Site</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
