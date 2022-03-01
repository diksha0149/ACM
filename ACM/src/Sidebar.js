
import React, { useState } from "react";
import "./Sidestyle.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import Image from './IET_DAVV.png'

const Sidebar = () => {

  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <div>
      <div className="logo">ACM,  IET DAVV </div>
        <ul className={isMobile ? "mobile-menu" : "menu-bar"} >
          <li onClick={() => setIsMobile(false)}><Link to="/">Home</Link></li>
          <li onClick={() => setIsMobile(false)}><Link to="/About">About_Us</Link></li>
          <li onClick={() => setIsMobile(false)}><Link to="/Our_Events">Our Events</Link></li>
          <li onClick={() => setIsMobile(false)}><Link to="/Board">Board</Link></li>
          <li onClick={() => setIsMobile(false)}><Link to="/Contact_us">Contact us</Link></li>
        </ul>
           <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? (<FaTimes />) : (<FaBars />)}
        </button>
      </div>
    </>
  );
};

export default Sidebar;
