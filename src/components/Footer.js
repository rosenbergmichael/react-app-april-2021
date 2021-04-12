import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the newsletter and don't miss out!
        </p>
        <p className="footer-subscription-text">
          Unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder="youremail@example.com" className="footer-input"/>
              <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About</h2>
            <Link to='/ '>Sign Up</Link>
            <Link to='/'>Reviews</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
