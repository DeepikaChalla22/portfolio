import React from "react";
import "./About.css";
import { Link } from "react-scroll";
function About() {
  return (
    <div className="about-contanier" id="aboutme">
      <div className="about-title">
        <div className="about-title-heading">
          About Me
          <div className="about-title-description">
            Why choose me ?<div className="border-image"></div>
          </div>
        </div>
      </div>
      <div className="about-grandparent">
        <div className="about-parent">
          <div className="about-picture-background">
            <div className="about-picture"></div>
          </div>

          <div className="about-details">
            <span className="description">
            As a MERN developer, I bring a unique blend of expertise and dedication to your project. My deep understanding of the MERN stack, coupled with a passion for clean, efficient code, ensures that I can deliver robust and scalable web applications. 
            </span>
            <div className="about-details-name">
              <span className="about-hilighted-text">
                <h2>Few Highlights</h2>
              </span>
              <span className="about-skills">
                <ul>
                  <li>Software Development</li>
                  <li>React Js and Python</li>
                  <li>Interactive Front End as per design</li>
                </ul>
              </span>
            </div>

            <div className="about-options">
              <Link
                to="contactme"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
              >
                <button className="btn primary-btn"> Hire Me </button>
              </Link>
              <a href="Deepika_Resume.pdf" download="Deepika Resume.pdf">
                <button className="btn highlighted-btn"> Get Resume </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;