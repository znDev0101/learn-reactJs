import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          EPIC
          <i class="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
              Services <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <DropDown />}
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
