import React, { useState } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faFolderOpen, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    console.log('Sidebar Toggled');
    setIsOpen(!isOpen);
  };

  return (
    <div className={`d-lg-none d-sm-flex mobile-nav-bar ${isOpen ? 'open' : ''}`}>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} color="#4d4d4e" />
      </div>
      {isOpen && (
        <nav>
          <NavLink exact activeClassName="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink exact activeClassName="active" className="mobile-about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink exact activeClassName="active" className="mobile-my-work-link" to="/my-work">
            <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e" />
          </NavLink>
          <NavLink exact activeClassName="active" className="mobile-contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
      )}
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dathonweber/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/Dathonweber">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
