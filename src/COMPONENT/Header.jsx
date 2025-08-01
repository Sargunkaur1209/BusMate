import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="Header">
      {/* Top Row: Logo + Login/Logout + Menu */}
      <div className="HeaderTop">
        <div className="Logos">
          <img src={logo} alt="Logo" className="Logo" />
        </div>

        

        <div className="menu-icon mobile" onClick={() => setMenuOpen(!menuOpen)}>
          &#8942;
        </div>
      

      {/* Desktop Navigation */}
      <div className="Links desktop">
        <Link to="/" className="link">Home</Link>
        <Link to="/Services" className="link">Services</Link>
        <Link to="/ContactUs" className="link">Contact Us</Link>
        <Link to="/about" className="link">About Us</Link>
      </div>
      <div className="LogSin">
          <Link to="/Logout" className="_signup">Logout</Link>
          <Link to="/login" className="_login">Login</Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="dropdown mobile">
          <Link to="/" className="link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/Services" className="link" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/ContactUs" className="link" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          <Link to="/about" className="link" onClick={() => setMenuOpen(false)}>About Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;