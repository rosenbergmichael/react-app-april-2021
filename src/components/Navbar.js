import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TopTravel <i className="fas fa-passport" />
          </Link>
        </div>       
      </nav>
    </>
  )
}

export default Navbar