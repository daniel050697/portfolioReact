import React from "react";
import logo from "../logo.jpg";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
import { faBars } from "../../node_modules/@fortawesome/free-solid-svg-icons";
//import { Link } from "react-router-dom";

import { NavHashLink as Link } from "react-router-hash-link";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
      <div className="container"> 

        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="Logo..."  /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} 
          style={{ 
            color: "#fff"
          }}/>
        </button>
          
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth className="nav-link" to="#" >
                Home <span className="sr-only">(current)</span>
                </Link>
            </li>
            <li className="nav-item">
              <Link smooth className="nav-link" to="#about">
                About Me
                </Link>
            </li>
            <li className="nav-item">
              <Link smooth className="nav-link" to="#skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth className="nav-link" to="#experience">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth className="nav-link" to="#project">
                Project
                </Link>
            </li>
            <li className="nav-item">
              <Link smooth className="nav-link" to="#contact">
                Contact
                </Link>
            </li>

          </ul>
        </div>
        
        </div>
      </nav>
    )
}

export default Navbar
