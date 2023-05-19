import React, { useState } from 'react';
import data from "../data/data.json"

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className={`navbar navbar-b navbar-trans navbar-expand-md fixed-top ${isExpanded ? 'expanded' : ''}`}>
      <div className="container">
        <a className="navbar-brand js-scroll" href="#page-top">
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarDefault"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`navbar-collapse collapse justify-content-end ${isExpanded ? 'show' : ''}`} id="navbarDefault">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll active" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://drive.google.com/file/d/1RMFjPHzIxGYJTq6jfLR49ctk7KSMr5VK/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;