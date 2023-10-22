import { React, useState } from "react";
import "./Resume.css";
function Resume() {
  const [tooggleState, setToggleState] = useState(1);
  const toogleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="resume-container" id="resume">
      <div className="resume-title">
        <div className="resume-title-heading">
          Resume
          <div className="resume-title-description">
            My Formal Bio Details<div className="border-image"></div>
          </div>
        </div>
      </div>
      <div className="resume-bio-details">
        <div className="resume-tabs">
          <div className="tabs-header">
            <div
              className={tooggleState === 1 ? "active" : ""}
              onClick={() => toogleTab(1)}
            >
              <i className="fa fa-graduation-cap"> Education</i>
            </div>
            <div
              className={tooggleState === 2 ? "active" : ""}
              onClick={() => toogleTab(2)}
            >
              <i className="fa fa-history"> Work History</i>
            </div>
            <div
              className={tooggleState === 3 ? "active" : ""}
              onClick={() => toogleTab(3)}
            >
              <i className="fa fa-code"> Coding Skills</i>
            </div>
            <div
              className={tooggleState === 4 ? "active" : ""}
              onClick={() => toogleTab(4)}
            >
              <i className="fa fa-bar-chart"> Projects</i>
            </div>
            <div
              className={tooggleState === 5 ? "active" : ""}
              onClick={() => toogleTab(5)}
            >
              <i className="fa fa-heart"> Interests</i>
            </div>
          </div>

          <div className="tab-content">
            <div className={tooggleState === 1 ? "active" : ""}>
              <i className="fa fa-graduation-cap"></i>
              <h2>Education</h2>
              <div className="education">
                <div className="one-line">
                  <h4>Bachleor of Engineering in Computer Science and Technology</h4>
                  <span>2021-2025</span>
                </div>
                <div className="college">
                  Vellore Institute of Technology,Chennai
                </div>

                <div className="one-line">
                  <h4>Secondary school in MPC</h4>
                  <span>2019-2021</span>
                </div>
                <div className="college">
                  Abhyas Junior College, Proddatur Kadapa
                </div>

                <div className="one-line">
                  <h4>HighSchool</h4>
                  <span>2008-2019</span>
                </div>
                <div className="college">
                  Sharadha highSchool (Eng Med),  Proddatur Kadapa
                </div>
              </div>
            </div>

            <div className={tooggleState === 2 ? "active" : ""}>
              <i className="fa fa-history"></i>
              <h2>Work History</h2>
              <div className="one-line">
                <h3>Internship at Ethnus</h3>
              </div>
              <div className="college">
                I have completed Internship at Ethnus as a web
                Devleoper. I worked with team directly in MERN Full Stack  web-development
                section. During my internship, I was able to develop my
                communication and problems solving skills. I particularly found
                direct interactions with real life problems and finding a
                solution to fix it. I believe the internship was valuable in
                developing my confidence
              </div>
            </div>

            <div className={tooggleState === 3 ? "active" : ""}>
              <i className="fa fa-code"></i>
              <h2>Coding Skills</h2>
              <div className="coding-container">
                <div className="display-skills">
                  <div className="division-1">
                    <div className="coding-skills">
                      <h4>Python</h4>
                      <div className="progress">
                        <div className="python">
                          <span>95%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>React JS</h4>
                      <div className="progress">
                        <div className="react">
                          <span>85%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>JavaScript</h4>
                      <div className="progress">
                        <div className="javascript">
                          <span>86%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>HTML</h4>
                      <div className="progress">
                        <div className="html">
                          <span>89%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>CSS</h4>
                      <div className="progress">
                        <div className="css">
                          <span>80%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="division-2">
                    <div className="coding-skills">
                      <h4>JAVA</h4>
                      <div className="progress">
                        <div className="java">
                          <span>80%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>C</h4>
                      <div className="progress">
                        <div className="c">
                          <span>80%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>c++</h4>
                      <div className="progress">
                        <div className="cplus">
                          <span>75%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>ExpressJS</h4>
                      <div className="progress">
                        <div className="android">
                          <span>85%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>DBMS</h4>
                      <div className="progress">
                        <div className="dbms">
                          <span>91%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={tooggleState === 4 ? "active" : ""}>
              <i className="fa fa-bar-chart"></i>
              <h2>Projects</h2>

              <div className="project">
                <h4>Portfolio Website Using React JS</h4>
              </div>
              <div className="project-college">
                <span>
                  Technologies Used : React JS, Bootstrap
                  <br />
                </span>
                A personal portfolio Website to showcase all my details and
                projects at one place.
              </div>
              <div>
                still working on other projects
              </div>
            
            </div>

            <div className={tooggleState === 5 ? "active" : ""}>
              <i className="fa fa-heart"></i>
              <h2>Interests</h2>
              <div className="interest">
                <div className="dot">
                  <h4>Teaching</h4>
                </div>
              </div>
              <div className="interest-description">
                Apart from being tech devotee , I likewise
                love to teach people what I know simply because I believe in
                sharing.
              </div>

              <div className="interest">
                <div className="dot">
                  <h4>Gardening</h4>
                </div>
              </div>
              <div className="interest-description">
              Gardening has taught me the importance of patience and dedication. Nurturing plants from seeds to full bloom requires commitment, attention to detail, and a long-term perspective, which I apply to my work.
              </div>

              <div className="interest">
                <div className="dot">
                  <h4>Reading novels</h4>
                </div>
              </div>
              <div className="interest-description">
              Novel reading fuels my curiosity and desire for continuous learning. This habit has broadened my knowledge base, honed my critical thinking skills, and deepened my understanding of various subjects and cultures.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;