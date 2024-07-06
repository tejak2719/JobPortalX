import React from 'react';
import { Link } from 'react-router-dom' 
import '../styles.css'; // Import the styles.css file

function Header() {
  return (
    <header className="header">
      <nav className="navbar-container">
        <ul className="nav-list">
          <Link to='/findjobs'  className='nav-item'><li>FindJobs</li></Link>
          <Link to='/postjobs'  className='nav-item'><li>postjobs</li></Link>
          <Link to='/Resources' className='nav-item'><li>Resources</li></Link>
        </ul>
        <div id="google_translate_element" style={{ marginRight: '15px' }}></div>
     
        <Link to="/join"><button className='join-button'>Join Now</button></Link>
      </nav>
    </header>
  );
}

export default Header;