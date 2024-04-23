import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from './MobileNav'
export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    };
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu = {toggleMenu}/>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="Logo" src="assets/images/RafatAlsaqqa.png" />

          <ul>
            <li>
                <a className="menu-item">Home</a>
            </li>
            <li>
                <a className="menu-item">About</a>
            </li>
            <li>
                <a className="menu-item">Skills</a>
            </li>
            <li>
                <a className="menu-item">Projects</a>
            </li>
            <li>
                <a className="menu-item">Contact</a>
            </li>
            <button className="contact-btn" onClick={() => {}}>Hire Me</button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span class={"material-symbols-outlined"}
            style={{fontSize:"1.8rem"}}>
                {openMenu ? "close":"menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};
