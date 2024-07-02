import React from 'react';
import '../styles.css'; // Import the styles.css file

function Header() {
  return (
    <header className="header">
      <nav className="navbar-container">
        <ul className="nav-list">
          <li className="nav-item"><a href="#findjobs">FindJobs</a></li>
          <li className="nav-item"><a href="#postjobs">PostJobs</a></li>
          <li className="nav-item"><a href="#resources">Resources</a></li>
        </ul>
        <a href="#join" className="join-button">Join Now</a>
      </nav>
    </header>
  );
}

export default Header;