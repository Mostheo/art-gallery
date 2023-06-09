import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header">
        <Link to="/" className="titreh1-link"style={{ textDecoration: 'none' }}>
          <h1 className="titreh1">Art-Gallery</h1>
        </Link>
        <div className="buttons">
          <Link to="/works" className="button borderRight"><span>Works</span></Link>
          <Link to="/artists" className="button borderRight"><span>Artists</span></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;