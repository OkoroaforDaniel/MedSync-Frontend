import React, { useState } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = () => {

  const [navIcon, setNavIcon] = useState(false);

  function handleNavClick () {
    setNavIcon(!navIcon);
  }

  const sideNavClass = navIcon ? "sideNavActive" : "sideNav";

  // const mainBodyClass = navIcon ? "mainBody2" : "mainBody";

  return (
    <div>
      <div className="NavBar">
        <div>
          <h1 class="Nav-title">MedSync</h1>
        </div>
        <div>
          <ul>
            <li>
            <Link className="link" to='/'>
              Home
            </Link>
            </li>
            <li>
              <Link className="link" to='/Services'>
              Services
              </Link>
            </li>
            <li>
            <Link className="link" to='/About'>
            About
            </Link>
            </li>
            <li>
            <Link className="link" to='/Doctors'>
            Doctors
            </Link>
            </li>
            <li>
            <Link className="link" to='/Login'>
            Login
            </Link>
            </li>
            <li className="SignUp">
            <Link className="link" to='/Register'>
            <p className="signupP">SignUp</p>
            </Link>
            </li>
          </ul>
        </div>
            <div className="LandingNavDiv">
              <i className="LandingNavIcon" onClick={handleNavClick} class="fa-solid fa-bars fa-xl toggle-sidebar-btn" style={{color: "#102242"}}></i>
          </div>

          <div className={sideNavClass} id="sideNav">
          <div className="spanDiv" id="spanDiv">
          <i class="fa-solid fa-square-poll-horizontal" style={{color: "#222e3a"}}></i>
            <span className="sideNavIcon">Home</span>
          </div>
          <div className="spanDiv1">
          <i class="fa-brands fa-squarespace" style={{color: "#222e3a"}}></i>
            <span className="sideNavIcon">Services</span>
          </div>
          <div className="spanDiv1">
          <i class="fa-solid fa-list" style={{color: "#222e3a"}}></i>
            <span className="sideNavIcon">About</span>
          </div>
          <div className="spanDiv1">
          <i class="fa-solid fa-table" style={{color: "#222e3a"}}></i>
            <span className="sideNavIcon">Doctors</span>
          </div>

          <div className="spanDiv3">
          <i class="fa-regular fa-address-card" style={{color: "#222e3a"}}></i>
            <span className="sideNavIcon">Contact</span>
          </div>
          <div className="spanDiv3">
          <Link className="link" to='/Register' >
          <i class="fa-solid fa-rectangle-list" style={{color: "#222e3a"}}></i>
            <span className="sideNavIcon">SignUp</span>
            </Link>
          </div>

          
          <div className="spanDiv3">
          <Link className="link" to='/Login'>
          <i class="fa-solid fa-right-to-bracket" style={{color: "#222e3a"}}></i>
            <span className="sideNavIcon">Login</span>
            </Link>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default NavBar;
