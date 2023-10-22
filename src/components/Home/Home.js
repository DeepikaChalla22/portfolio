import React from "react";
import "./Home.css";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import Navbar from "../Navbar/Navbar";
// import AboutMe from "../AboutMe/AboutMe";
// import Resume from "../Resume/Resume";
// import ContactMe from "../ContactMe/ContactMe";
import {BrowserRouter as Router} from "react-router-dom";
export default function Home() {
  return (
    <div className="home-container" id="home">
      <Router>
      <Navbar/>
      {/* <Routes>
        <Route path="/" element={<Home/>} />
        <Route exact path="/about-me" element={<AboutMe />} />
        <Route exact path="/resume" element={<Resume/>} />
        <Route exact path="/contact-me" element={<ContactMe/>} />
      </Routes> */}
     </Router>
      <Profile />
      <Footer />
    </div>
  );
}