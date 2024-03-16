import React, { useState } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faFolderOpen, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`d-lg-none d-sm-flex mobile-nav-bar ${isOpen ? 'open' : ''}`}>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} color="#4d4d4e" />
      </div>
      {isOpen && (
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="mobile-about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="mobile-my-work-link" to="/my-work">
            <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e" />
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="mobile-contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
