import {React,useState} from 'react'
import {Link} from "react-scroll";
import "./Navbar.css"

const Navbar = () => {
    const[isMobile,setIsMoblie]=useState(false);
    return (
    <div className='navbar-container'>
        <h3 className='navbar-parent'>PortFolio</h3>
        <ul className={isMobile ? 'navbar-links-mobile':'navbar-links'}
        onClick={()=>{setIsMoblie(false)}}
        >
            <Link to="home" spy={true} smooth={true} offset={10} duration={500} className="home">
                <li >Home</li>
            </Link>
            <Link to="aboutme" spy={true} smooth={true} offset={-5} duration={500} className='about-me'>
            <li>About Me</li>
            </Link>
            <Link to="resume" spy={true} smooth={true} offset={10} duration={500} className='resume'>
                <li>Resume</li>
            </Link>
            <Link to="contactme" spy={true} smooth={true} offset={50} duration={500} className='contact-me'>
                <li>Contact Me</li>
            </Link>
        </ul>  
        <button className='mobile-menu-icon'
            onClick={()=>setIsMoblie(!isMobile)}>
             {isMobile ? (
            <i className="fa fa-times" />
            ):(
            <i className="fa fa-bars" />
            )}
        </button>
    </div>
  )
}


export default Navbar