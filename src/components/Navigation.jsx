import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <HashLink smooth to="#about">
            <i className="material-icons">person</i>
            <span>About</span>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#experience">
            <i className="material-icons">work</i>
            <span>Experience</span>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#skills">
            <i className="material-icons">code</i>
            <span>Skills</span>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#projects">
            <i className="material-icons">folder</i>
            <span>Projects</span>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#contact">
            <i className="material-icons">mail</i>
            <span>Contact</span>
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation; 