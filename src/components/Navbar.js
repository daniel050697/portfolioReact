import React from "react";
import logo from "../logo.jpg";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
import { faBars } from "../../node_modules/@fortawesome/free-solid-svg-icons";


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
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Project</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>

          </ul>
        </div>
        </div>
      </nav>
    )
}

export default Navbar
