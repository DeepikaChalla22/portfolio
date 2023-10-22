import React from "react";
import './Footer.css'
import {Link} from "react-scroll";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 text-justify col-lg-10 mx-auto">
            <div className="row">
              <div className="col-12  col-lg-5">
                <h3>Challa Deepika Sai</h3>
                <br/>
                <br/>
                <ul>
                Passionate about MERN Stack Development, my objective is to secure a prominent role in the IT field where I can leverage my skills to deliver innovative and impactful web applications. committed to achieving satisfaction through my work.
                </ul>
              </div>
              <div className="col-12 text-center col-lg-2">
                <h3>Important Links</h3>
                <br/>
                <ul>
            
                  <li>
                    <Link to="home" spy={true} smooth={true} offset={10} duration={500}>home</Link>
                  </li>
                  <li>
                  <Link to="aboutme" spy={true} smooth={true} offset={-5} duration={500}>About me</Link>
                  </li>
                  <li>
                  <Link to="resume" spy={true} smooth={true} offset={10} duration={500}>Resume</Link>
                  </li>
                  <li>
                  <Link to="contactme" spy={true} smooth={true} offset={50} duration={500}>Contact Me</Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 text-center col-lg-4">
                <h3>contact info</h3>
                <br/><br/>
                <ul>
                  <li>+91 1234567890</li>
                  <li>challadeepika2004@gmail.com</li>
                  <li> Proddatur</li>
                  <li>Andhra Pradesh</li>
                  <li>India</li>
                </ul>
              </div>
              <div className="col-12 text-center col-lg-1">
                <h3>Social Links</h3>
                <br/>
                <ul>
                  <li>
                    {/* <a href="https://www.instagram.com/project_maker___/"> */}
                    <a href="https://www.instagram.com/dpka.see">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/challa-deepika-sai/">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/deepikachalla22">Github</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr/>
            <div className="mt-3">
              <p className="main hero para text-center width=100">copyright @ 2022 DeepikaChalla. All Rights reserved.</p>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;